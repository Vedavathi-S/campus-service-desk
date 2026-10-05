package com.campusdesk.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class NotificationService {

    private final RestTemplate restTemplate;

    public NotificationService() {
        this.restTemplate = new RestTemplate();
    }

    public void sendNotification(String email, String message) {

        String url = "http://localhost:3000/api/notifications";

        Map<String, String> notification = Map.of(
                "email", email,
                "message", message
        );

        restTemplate.postForObject(
                url,
                notification,
                String.class
        );
    }
}

