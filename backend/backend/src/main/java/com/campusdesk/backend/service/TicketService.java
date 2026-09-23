package com.campusdesk.backend.service;

import com.campusdesk.backend.model.Ticket;
import com.campusdesk.backend.model.User;
import com.campusdesk.backend.repository.TicketRepository;
import com.campusdesk.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;
    private final UserRepository userRepository;

    public TicketService(TicketRepository ticketRepository,UserRepository userRepository) {
        this.ticketRepository = ticketRepository;
        this.userRepository = userRepository;
    }

    public List<Ticket> getAllTickets() {

        return ticketRepository.findAll();
    }

    public Ticket createTicket(Ticket ticket,String email) {
        User user=userRepository.findByEmail(email).orElseThrow();
        ticket.setStatus("OPEN");
        ticket.setCreatedBy(user);
        return ticketRepository.save(ticket);
    }

    public List<Ticket> getMyTickets(String email)
    {
        User user=userRepository.findByEmail(email).orElseThrow();
        return ticketRepository.findByCreatedBy(user);
    }

    public Ticket updateStatus(Long ticketId, String status)
    {
        Ticket ticket=ticketRepository.findById(ticketId).orElseThrow();
        ticket.setStatus(status);
        return ticketRepository.save(ticket);
    }
}