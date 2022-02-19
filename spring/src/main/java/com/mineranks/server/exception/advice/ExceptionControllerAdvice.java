package com.mineranks.server.exception.advice;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Builder;
import lombok.experimental.SuperBuilder;
import lombok.extern.jackson.Jacksonized;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@ControllerAdvice
public class ExceptionControllerAdvice {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> exception(Exception e) {
        ErrorInfo errorInfo = ErrorInfo.builder()
                .className(e.getClass().getName())
                .message(e.getLocalizedMessage())
                .build();

        return ResponseEntity.badRequest().body(errorInfo.toJSON());
    }

    /**
     * Handles exception thrown by Bean Validation on controller methods parameter
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(code = BAD_REQUEST)
    @ResponseBody
    public ResponseEntity handleMethodArgumentNotValidException(MethodArgumentNotValidException e, WebRequest request) {
        BindingErrorsResponse bindingErrors = new BindingErrorsResponse();
        BindingResult bindingResult = e.getBindingResult();

        if (bindingResult.hasErrors()) {
            bindingErrors.addAllErrors(bindingResult);
        }

        ValidationErrorInfo errorInfo = ValidationErrorInfo.builder()
                .className(e.getClass().getName())
                .message("Validation Errors")
                .validationErrors(bindingErrors)
                .build();

        return ResponseEntity.badRequest().body(errorInfo.toJSON());
    }

    @Jacksonized
    @SuperBuilder
    @JsonIgnoreProperties(ignoreUnknown = true)
    private static class ErrorInfo {
        public String className;
        public String message;

        public String toJSON() {
            String result = "";
            ObjectMapper mapper = new ObjectMapper();
            mapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);

            try {
                result = mapper.writeValueAsString(this);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }

            return result;
        }
    }

    @Jacksonized
    @SuperBuilder
    @JsonIgnoreProperties(ignoreUnknown = true)
    private static class ValidationErrorInfo extends ErrorInfo {
        public BindingErrorsResponse validationErrors;
    }
}