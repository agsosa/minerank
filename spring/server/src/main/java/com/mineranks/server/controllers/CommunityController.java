package com.mineranks.server.controllers;

import com.mineranks.server.models.CommunityModel;
import com.mineranks.server.services.CommunityService;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/communities")
@Validated
public class CommunityController {

  @Autowired
  private CommunityService communityService;

  @GetMapping
  public Iterable<CommunityModel> getAllCommunities() {
    return communityService.getAllCommunities();
  }

  @PostMapping
  public CommunityModel createCommunity(
    @Valid @RequestBody CommunityModel community
  ) {
    return communityService.createCommunity(community);
  }
}
