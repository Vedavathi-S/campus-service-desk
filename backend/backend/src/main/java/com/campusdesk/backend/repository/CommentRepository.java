package com.campusdesk.backend.repository;

import com.campusdesk.backend.model.Comment;
import com.campusdesk.backend.model.Ticket;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByTicketOrderByCreatedAtAsc(Ticket ticket);
}
