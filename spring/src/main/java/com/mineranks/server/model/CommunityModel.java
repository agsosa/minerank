package com.mineranks.server.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "communities")
public class CommunityModel {
    /* Required fields */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String shortName;

    @Column(nullable = false)
    private String ip;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    @ColumnDefault("false")
    private boolean isActive;

    @Column(nullable = false)
    @ColumnDefault("0")
    private Integer upvotes;

    @Column(nullable = false)
    private String premiumType; // TODO: Create enum

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
    @NotBlank(message = "Test validation exception handler")
    private String countryCode;
    private String port;
    private String website;
    private String youtube;
    private String telegram;
    private String discord;
    private String facebook;
    private String teamspeak;
    private String instagram;

    /* Timestamps */
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    @CreationTimestamp
    private LocalDateTime createdAt;
}
