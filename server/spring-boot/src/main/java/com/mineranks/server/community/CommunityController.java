package com.mineranks.server.community;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1/communities")
@Validated
public class CommunityController {

    private final CommunityService communityService;

    public CommunityController(CommunityService communityService) {
        this.communityService = communityService;
    }

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

    @GetMapping("/{id}")
    public CommunityEntity getCommunity(@PathVariable Long id) {
        return communityService.getCommunity(id);
    }
}
