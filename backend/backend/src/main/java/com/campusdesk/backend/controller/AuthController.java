package com.campusdesk.backend.controller;
import org.springframework.web.bind.annotation.*;
import com.campusdesk.backend.service.AuthService;
import com.campusdesk.backend.dto.LoginRequest;
import com.campusdesk.backend.dto.RegisterRequest;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest registerRequest) {
        return authService.register(registerRequest);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }
}

