package com.mineranks.server.controller;

import com.mineranks.server.model.CommunityModel;
import com.mineranks.server.service.CommunityService;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
  public CommunityModel createCommunity(@Valid @RequestBody CommunityModel community) {
    return communityService.createCommunity(community);
  }

  @DeleteMapping
  public ResponseEntity<HttpStatus> deleteCommunity(@RequestParam Long id) {
    communityService.deleteCommunity(id);
    return new ResponseEntity<>(HttpStatus.OK);
  }
}
