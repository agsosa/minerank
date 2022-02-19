package com.mineranks.server.exception;

public class CommunityNotFoundException extends RuntimeException {
    public CommunityNotFoundException(Long id) {
        super(String.format("Community with ID %d not found", id));
    }
}