package com.example.alcaline.dto;

public class AdminLoginRequest extends LoginRequest {

    private String adminUsername;
    private String adminPassword;

    public AdminLoginRequest() {
        super();
    }

    public AdminLoginRequest(String username, String password, String adminUsername, String adminPassword) {
        super(username, password);
        this.adminUsername = adminUsername;
        this.adminPassword = adminPassword;
    }

    // Additional getters and setters for admin-specific fields

    public String getAdminUsername() {
        return adminUsername;
    }

    public void setAdminUsername(String adminUsername) {
        this.adminUsername = adminUsername;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }
}
