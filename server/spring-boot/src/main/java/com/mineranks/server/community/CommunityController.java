package com.mineranks.server.community;

import com.mineranks.server.community.dto.CommunityDtoMapper;
import com.mineranks.server.community.dto.CreateCommunityDto;
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
    private final CommunityDtoMapper communityDtoMapper;

    public CommunityController(CommunityService communityService, CommunityDtoMapper communityDtoMapper) {

        this.communityService = communityService;
        this.communityDtoMapper = communityDtoMapper;
    }

    @GetMapping
    public Iterable<Community> getAllCommunities() {
        return communityService.getAllCommunities();
    }

    @PostMapping
    public ResponseEntity<Community> createCommunity(@Valid @RequestBody CreateCommunityDto createCommunityDto) {
        Community input = communityDtoMapper.fromCreateCommunityDto(createCommunityDto);
        Community result = communityService.createCommunity(input);

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCommunity(@PathVariable Long id) {
        communityService.deleteCommunity(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Community getCommunity(@PathVariable Long id) {
        return communityService.getCommunity(id);
    }
}
