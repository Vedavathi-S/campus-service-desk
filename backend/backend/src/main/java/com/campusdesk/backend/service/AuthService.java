package com.campusdesk.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.campusdesk.backend.model.User;
import com.campusdesk.backend.repository.UserRepository;
import com.campusdesk.backend.dto.LoginRequest;
import com.campusdesk.backend.dto.RegisterRequest;

@Service
public class AuthService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public String register(RegisterRequest registerRequest) {
     if(userRepository.existsByEmail(registerRequest.getEmail())) {
            return "Error: Email is already in use!";
        }

        User user = new User(
        registerRequest.getName(),
        registerRequest.getEmail(),
        passwordEncoder.encode(registerRequest.getPassword()),
        "STUDENT"
        );
        userRepository.save(user);
        return "User registered successfully!";
    }

    public String login(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail()).orElse(null);
        if (user == null) {
            return "Error: User not found!";
        }
        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return "Error: Invalid credentials!";
        }

        return jwtService.generateToken(user.getEmail(), user.getRole());
    }
}
