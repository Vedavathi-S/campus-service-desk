package com.campusdesk.backend.service;

import com.campusdesk.backend.model.Comment;
import com.campusdesk.backend.model.Ticket;
import com.campusdesk.backend.model.User;
import com.campusdesk.backend.repository.CommentRepository;
import com.campusdesk.backend.repository.TicketRepository;
import com.campusdesk.backend.repository.UserRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    
    private final CommentRepository commentRepository;
    private final TicketRepository ticketRepository;
    private final UserRepository userRepository;

    public CommentService(
            CommentRepository commentRepository,
            TicketRepository ticketRepository,
            UserRepository userRepository) {

        this.commentRepository = commentRepository;
        this.ticketRepository = ticketRepository;
        this.userRepository = userRepository;
    }

     public Comment addComment(Long ticketId,String message,String email)
    {
       User user=userRepository.findByEmail(email).orElseThrow();
       Ticket ticket=ticketRepository.findById(ticketId).orElseThrow();
       Comment comment=new Comment(message,user,ticket);

       return commentRepository.save(comment);

    }

    public List<Comment> getComments(Long ticketId)
    {
        Ticket ticket=ticketRepository.findById(ticketId).orElseThrow();
        return commentRepository.findByTicketOrderByCreatedAtAsc(ticket);
    }

}
