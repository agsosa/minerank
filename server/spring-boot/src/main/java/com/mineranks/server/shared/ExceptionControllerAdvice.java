package com.mineranks.server.shared;

import lombok.Builder;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;

@ControllerAdvice
@Slf4j
public class ExceptionControllerAdvice {
    /**
     * Handles common exceptions
     *
     * @param ex the exception
     * @return ErrorResponse object
     */
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(Throwable.class)
    @ResponseBody
    public ErrorResponse handleThrowable(final Throwable ex) {
        log.error("Unexpected error", ex);

        return ErrorResponse.builder()
                            .code("INTERNAL_SERVER_ERROR")
                            .message("An unexpected internal server error occurred")
                            .build();
    }

    @ExceptionHandler(EntityNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ResponseBody
    public ErrorResponse handleNotFoundException(final EntityNotFoundException ex) {
        return ErrorResponse.builder().code("ENTITY_NOT_FOUND").message("The requested entity was not found").build();
    }

    /**
     * Handles argument validation error exception
     *
     * @param ex the validation exception
     * @return ValidationErrorResponse object
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseBody
    public ValidationErrorResponse handleValidationException(final MethodArgumentNotValidException ex) {

        ArrayList<ValidationError> list = new ArrayList<>();

        ex.getBindingResult()
          .getFieldErrors()
          .forEach(error -> list.add(ValidationError.builder()
                                                    .object(error.getObjectName())
                                                    .field(error.getField())
                                                    .type(error.getCode())
                                                    .value(String.valueOf(error.getRejectedValue()))
                                                    .message(error.getDefaultMessage())
                                                    .build()));

        return ValidationErrorResponse.builder()
                                      .code("VALIDATION_ERROR")
                                      .message("An argument validation error occurred")
                                      .errors(list)
                                      .build();
    }

    @Data
    @Builder
    private static class ErrorResponse {
        private final String code;
        private final String message;
    }

    @Data
    @Builder
    private static class ValidationErrorResponse {
        private final String code;
        private final String message;
        private final ArrayList<ValidationError> errors;
    }

    @Data
    @Builder
    private static class ValidationError {
        private final String object;
        private final String field;
        private final String type;
        private final String value;
        private final String message;
    }
}