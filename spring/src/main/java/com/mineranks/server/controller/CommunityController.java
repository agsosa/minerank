package com.mineranks.server.controller;

import com.mineranks.server.entities.CommunityEntity;
import com.mineranks.server.service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/communities")
@Validated
public class CommunityController {

    @Autowired
    private CommunityService communityService;

    @GetMapping
    public Iterable<CommunityEntity> getAllCommunities() {
        return communityService.getAllCommunities();
    }

    @PostMapping
    public CommunityEntity createCommunity(@Valid @RequestBody CommunityEntity community) {
        return communityService.createCommunity(community);
    }

    @DeleteMapping
    public ResponseEntity<HttpStatus> deleteCommunity(@RequestParam Long id) {
        communityService.deleteCommunity(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
