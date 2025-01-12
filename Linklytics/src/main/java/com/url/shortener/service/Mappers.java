package com.url.shortener.service;

import com.url.shortener.dto.ClickEventDTO;
import com.url.shortener.dto.UrlMappingDTO;
import com.url.shortener.models.UrlMapping;
import org.springframework.stereotype.Component;

@Component
public class Mappers {
    public UrlMappingDTO convertToUrlMappingDto(UrlMapping urlMapping) {
        UrlMappingDTO urlMappingDTO = new UrlMappingDTO();
        urlMappingDTO.setId(urlMapping.getId());
        urlMappingDTO.setOriginalUrl(urlMapping.getOriginalUrl());
        urlMappingDTO.setShortUrl(urlMapping.getShortUrl());
        urlMappingDTO.setClickCount(urlMapping.getClickCount());
        urlMappingDTO.setCreatedDate(urlMapping.getCreatedDate());
        urlMappingDTO.setUsername(urlMapping.getUser().getUsername());
        return urlMappingDTO;
    }

    public ClickEventDTO convertToClickEventDto(UrlMapping urlMapping) {
        ClickEventDTO clickEventDTO = new ClickEventDTO();
        clickEventDTO.setClickDate(urlMapping.getCreatedDate().toLocalDate());
        clickEventDTO.setCount((long) urlMapping.getClickCount());
        return clickEventDTO;
    }
}
