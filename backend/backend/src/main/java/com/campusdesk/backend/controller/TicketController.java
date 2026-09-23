package com.campusdesk.backend.controller;

import java.util.List;
import com.campusdesk.backend.service.TicketService;
import com.campusdesk.backend.model.Ticket;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping("/my")
    public List<Ticket> getMyTickets(Authentication authentication) {
        String email = authentication.getName();
        return ticketService.getMyTickets(email);
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket,Authentication authentication) {
        String email = authentication.getName();
        Ticket createdTicket=ticketService.createTicket(ticket,email);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(createdTicket);
    }
}
