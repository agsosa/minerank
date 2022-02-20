package com.mineranks.server.repository;

import com.mineranks.server.entity.CommunityEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityRepository
  extends CrudRepository<CommunityEntity, Long> {}
