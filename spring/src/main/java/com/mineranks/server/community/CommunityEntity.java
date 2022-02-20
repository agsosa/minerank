package com.mineranks.server.community;

import com.mineranks.server.shared.EntityBase;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "communities")
public class CommunityEntity extends EntityBase {
    /* Required fields */
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String shortName;

    @Column(nullable = false)
    private String ip;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    @ColumnDefault("0")
    private Integer votes;

    @Column(nullable = false)
    @ColumnDefault("false")
    private Boolean isApproved;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PremiumType premiumType;

    @Column(nullable = false)
    private String submitter; // TODO: Create relation with user model

    @Column(nullable = false)
    private String gamemodes; // TODO: Create relation with gamemodes model

    @Column(nullable = false)
    private String version; // TODO: Create relation with versions model

    @Column(nullable = false) // TODO: Ver si hacerlo opcional
    private String edition; // TODO: Create enum

    // TODO: Add reports relations

    /* Optional fields */
    private String port;
    private String countryCode;
    private String website;
    private String youtube;
    private String telegram;
    private String discord;
    private String facebook;
    private String teamspeak;
    private String instagram;
}
