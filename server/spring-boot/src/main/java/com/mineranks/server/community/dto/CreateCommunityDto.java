package com.mineranks.server.community.dto;

import com.mineranks.server.community.constant.MinecraftEdition;
import com.mineranks.server.community.constant.PremiumType;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;

@Data
public class CreateCommunityDto {
    @NotEmpty()
    @Length(min = 3, max = 32)
    private String name;

    @NotEmpty()
    @Length(min = 3, max = 24)
    private String shortName;

    @NotEmpty()
    private String ip;

    @NotEmpty()
    private String description;

    @NotEmpty()
    private PremiumType premiumType;

    /* To be defined fields */
    private String version;
    private String gamemodes;
    private String submitter;
    private MinecraftEdition edition = MinecraftEdition.JAVA;

    /* Optional fields */
    private Integer port;
    private String countryCode;
    private String website;
    private String youtube;
    private String telegram;
    private String discord;
    private String facebook;
    private String teamspeak;
    private String instagram;
}
