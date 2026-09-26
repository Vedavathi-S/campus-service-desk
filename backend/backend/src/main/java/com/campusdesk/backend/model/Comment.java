package com.campusdesk.backend.model;

import com.campusdesk.backend.model.User;
import com.campusdesk.backend.model.Ticket;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Comment{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String message;
    private LocalDateTime createdAt;

    @ManyToOne
    private User user;

    @ManyToOne
    private Ticket ticket;

    public Comment() {
    }

    public Comment(String message, User user, Ticket ticket) {
        this.message = message;
        this.user = user;
        this.ticket = ticket;
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public User getUser() {
        return user;
    }

    public Ticket getTicket() {
        return ticket;
    }

}