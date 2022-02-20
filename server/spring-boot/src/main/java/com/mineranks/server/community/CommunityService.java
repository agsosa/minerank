package com.mineranks.server.community;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class CommunityService {

    @Autowired
    private CommunityRepository communityRepository;

    public Iterable<Community> getAllCommunities() {
        return communityRepository.findAll();
    }

    public Community getCommunity(Long id) {
        return communityRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public Community createCommunity(Community community) {
        return communityRepository.save(community);
    }

    public Community updateCommunity(Community community) {
        return communityRepository.save(community);
    }

    public void deleteCommunity(Long id) {
        try {
            communityRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new EntityNotFoundException();
        }
    }
}
