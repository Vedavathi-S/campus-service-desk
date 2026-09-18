package com.campusdesk.backend.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class JwtService {
      private final String secret = "CampusServiceDeskSecretKeyForJwtAuthentication123456";
      private final SecretKey key = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));

      public String generateToken(String email,String role) {
          return Jwts.builder()
                  .subject(email)
                  .claim("role", role)
                  .issuedAt(new Date())
                  .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 ))
                  .signWith(key)
                  .compact();
      }

      public String extractEmail(String token) {
          return Jwts.parser()
                  .verifyWith(key)
                  .build()
                  .parseSignedClaims(token)
                  .getPayload()
                  .getSubject();
      }
}
