package com.mineranks.server.exception.advice;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class BindingErrorsResponse {

    public BindingErrorsResponse() {
        this(null);
    }

    public BindingErrorsResponse(Integer id) {
        this(null, id);
    }

    public BindingErrorsResponse(Integer pathId, Integer bodyId) {
        boolean onlyBodyIdSpecified = pathId == null && bodyId != null;
        if (onlyBodyIdSpecified) {
            addBodyIdError(bodyId, "must not be specified");
        }

        boolean bothIdsSpecified = pathId != null && bodyId != null;
        if (bothIdsSpecified && !pathId.equals(bodyId)) {
            addBodyIdError(bodyId, String.format("does not match pathId: %d", pathId));
        }
    }

    private void addBodyIdError(Integer bodyId, String message) {
        BindingError error = new BindingError();
        error.setObject("body");
        error.setField("id");
        error.setValue(bodyId.toString());
        error.setMessage(message);
        addError(error);
    }

    private final List<BindingError> bindingErrors = new ArrayList<BindingError>();

    public void addError(BindingError bindingError) {
        this.bindingErrors.add(bindingError);
    }

    public void addAllErrors(BindingResult bindingResult) {
        for (FieldError fieldError : bindingResult.getFieldErrors()) {
            BindingError error = new BindingError();
            error.setObject(fieldError.getObjectName());
            error.setField(fieldError.getField());
            error.setValue(String.valueOf(fieldError.getRejectedValue()));
            error.setMessage(fieldError.getDefaultMessage());
            addError(error);
        }
    }

    @Getter
    @Setter
    protected static class BindingError {
        public String object;
        public String field;
        public String value;
        public String message;

        public BindingError() {
            this.object = "";
            this.field = "";
            this.value = "";
            this.message = "";
        }
    }

}