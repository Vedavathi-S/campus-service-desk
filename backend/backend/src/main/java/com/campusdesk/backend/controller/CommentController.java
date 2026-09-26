package com.campusdesk.backend.controller;

import com.campusdesk.backend.model.Comment;
import com.campusdesk.backend.service.CommentService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.core.Authentication;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/tickets")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/{ticketId}/comments")
    public List<Comment> getComments(@PathVariable Long ticketId)
    {
        return commentService.getComments(ticketId);
    }

    @PostMapping("/{ticketId}/comments")
    public ResponseEntity<Comment> addComment(@PathVariable Long ticketId,
         @RequestBody Map<String, String> request,
          Authentication authentication)
          {
             String message = request.get("message");
             Comment comment=commentService.addComment(ticketId,message, authentication.getName());
              return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(comment);
          }
    
}
