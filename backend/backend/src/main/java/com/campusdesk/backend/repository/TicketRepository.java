package com.campusdesk.backend.repository;

import com.campusdesk.backend.model.Ticket;
import com.campusdesk.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

List<Ticket> findByCreatedBy(User user);

}
