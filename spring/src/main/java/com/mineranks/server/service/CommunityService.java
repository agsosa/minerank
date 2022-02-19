package com.mineranks.server.service;

import com.mineranks.server.exception.CommunityNotFoundException;
import com.mineranks.server.model.CommunityModel;
import com.mineranks.server.repository.CommunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommunityService {

  @Autowired
  private CommunityRepository communityRepository;

  public Iterable<CommunityModel> getAllCommunities() {
    return communityRepository.findAll();
  }

  public CommunityModel getCommunity(Long id) {
    return communityRepository.findById(id)
            .orElseThrow(() -> new CommunityNotFoundException(id));
  }

  public CommunityModel createCommunity(CommunityModel community) {
    return communityRepository.save(community);
  }

  public CommunityModel updateCommunity(CommunityModel community) {
    return communityRepository.save(community);
  }

  public void deleteCommunity(Long id) {
    communityRepository.deleteById(id);
  }
}