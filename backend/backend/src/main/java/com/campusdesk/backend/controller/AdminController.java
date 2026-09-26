package com.campusdesk.backend.controller;

import com.campusdesk.backend.model.Ticket;
import com.campusdesk.backend.service.TicketService;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final TicketService ticketService;

    public AdminController(TicketService ticketService) {
        this.ticketService = ticketService;
    }
    
    @GetMapping("/dashboard")
    public String getDashboard() {
        return "Admin Dashboard - Access granted!";
    }

}
