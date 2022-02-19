package com.mineranks.server.repository;

import com.mineranks.server.model.CommunityModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityRepository
  extends CrudRepository<CommunityModel, Long> {}
