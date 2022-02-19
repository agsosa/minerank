package com.mineranks.server.repositories;

import com.mineranks.server.models.CommunityModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityRepository
  extends CrudRepository<CommunityModel, Long> {}
