package com.campusdesk.backend.model;

public class Ticket {
    private Long id;
    private String title;
    private String category;
    private String priority;
    private String status;

    public Ticket(Long id, String title, String category, String priority, String status) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.priority = priority;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getCategory() {
        return category;
    }

    public String getPriority() {
        return priority;
    }

    public String getStatus() {
        return status;
    }
}
