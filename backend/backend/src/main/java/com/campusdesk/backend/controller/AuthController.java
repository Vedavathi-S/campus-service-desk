package com.campusdesk.backend.controller;
import org.springframework.web.bind.annotation.*;
import com.campusdesk.backend.service.AuthService;
import com.campusdesk.backend.dto.LoginRequest;
import com.campusdesk.backend.dto.RegisterRequest;
import com.campusdesk.backend.model.User;
import com.campusdesk.backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    private final UserRepository userRepository;

    public AuthController(AuthService authService,UserRepository userRepository) {
        this.authService = authService;
        this.userRepository= userRepository;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest registerRequest) {
        return authService.register(registerRequest);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        
        String token=authService.login(loginRequest);

        User user = userRepository
        .findByEmail(loginRequest.getEmail())
        .orElseThrow();

    return ResponseEntity.ok(
        Map.of(
            "token", token,
            "role", user.getRole()
        )
    );
    }
}

