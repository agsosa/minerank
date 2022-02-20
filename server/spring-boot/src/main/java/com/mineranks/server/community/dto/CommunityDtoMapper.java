package com.mineranks.server.community.dto;

import com.mineranks.server.community.Community;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommunityDtoMapper {
    Community fromCreateCommunityDto(CreateCommunityDto createCommunityDto);
}
