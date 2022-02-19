package com.mineranks.server.models;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;

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

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true, nullable = false)
  @JsonProperty("id")
  private Long id;

  @NotBlank(message = "Community name is required")
  @JsonProperty("name")
  private String name;

  @JsonProperty("ip")
  private String ip;

  @JsonProperty("website")
  private String website;

  @UpdateTimestamp
  @JsonProperty("updatedAt")
  private LocalDateTime updatedAt;

  @CreationTimestamp
  @JsonProperty("createdAt")
  private LocalDateTime createdAt;
}
