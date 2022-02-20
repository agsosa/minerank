package com.mineranks.server.exception.advice;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.ArrayList;

@ControllerAdvice
@Slf4j
public class ExceptionControllerAdvice {
    /**
     * Handles common exceptions
     * @param ex the exception
     * @return ErrorResponse object
     */
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(Throwable.class)
    @ResponseBody
    public ErrorResponse handleThrowable(final Throwable ex) {
        log.error("Unexpected error", ex);

        return ErrorResponse
                .builder()
                .code("INTERNAL_SERVER_ERROR")
                .message("An unexpected internal server error occurred")
                .build();
    }

    /**
     * Handles argument validation error exception
     * @param ex the validation exception
     * @return ValidationErrorResponse object
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseBody
    public ValidationErrorResponse handleValidationException(final MethodArgumentNotValidException ex) {

        ArrayList<ValidationError> list = new ArrayList<>();

        ex.getBindingResult().getAllErrors().forEach(error -> list.add(ValidationError
                .builder()
                .field(error.getObjectName())
                .type(error.getCode())
                .message(error.getDefaultMessage())
                .build()));

        return ValidationErrorResponse
                .builder()
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
        private final String field;
        private final String type;
        private final String message;
    }
}