package com.campusdesk.backend.service;

import com.campusdesk.backend.model.Ticket;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {

    public List<Ticket> getAllTickets() {

        return List.of(
            new Ticket(
                1001L,
                "Wi-Fi not working in Block A",
                "Internet",
                "HIGH",
                "OPEN"
            ),

            new Ticket(
                1002L,
                "Projector not working in Room 204",
                "Classroom Equipment",
                "MEDIUM",
                "IN_PROGRESS"
            ),

            new Ticket(
                1003L,
                "Lab computer not starting",
                "Laboratory",
                "LOW",
                "RESOLVED"
            )
        );
    }
}