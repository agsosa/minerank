package com.mineranks.server.services;

import com.mineranks.server.models.CommunityModel;
import com.mineranks.server.repositories.CommunityRepository;
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
    return communityRepository.findById(id).get();
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
