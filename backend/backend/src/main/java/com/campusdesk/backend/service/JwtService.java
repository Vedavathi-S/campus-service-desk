package com.campusdesk.backend.service;

import org.springframework.beans.factory.annotation.Value;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class JwtService {
      @Value("${jwt.secret}")
      private String secret;
      private SecretKey getSigningKey() {
          return Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
      }

      public String generateToken(String email,String role) {
          return Jwts.builder()
                  .subject(email)
                  .claim("role", role)
                  .issuedAt(new Date())
                  .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 ))
                  .signWith(getSigningKey())
                  .compact();
      }

      public String extractEmail(String token) {
          return Jwts.parser()
                  .verifyWith(getSigningKey())
                  .build()
                  .parseSignedClaims(token)
                  .getPayload()
                  .getSubject();
      }
}
