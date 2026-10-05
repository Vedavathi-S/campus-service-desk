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
    private final NotificationService notificationService;

    public TicketService(TicketRepository ticketRepository,UserRepository userRepository,NotificationService notificationService) {
        this.ticketRepository = ticketRepository;
        this.userRepository = userRepository;
        this.notificationService = notificationService;
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

    public Ticket getTicketById(Long id)
    {
        return ticketRepository.findById(id).orElseThrow();
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
         Ticket updatedTicket = ticketRepository.save(ticket);
         User student = ticket.getCreatedBy();
         String message = "Your ticket with ID " + ticket.getId() + " has been updated to status: " + status;
         notificationService.sendNotification(student.getEmail(), message);
         return updatedTicket;
    }
}