package com.url.shortener.dto;

import lombok.Data;

import java.util.Set;

@Data
public class RegisterRequestDTO {
    private String username;
    private String email;
    private Set<String> role;
    private String password;
}
