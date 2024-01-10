package com.example.alcaline.dto;

import java.sql.Date;

public class AdminRegisterRequest extends RegisterRequest {
    private Long adminId;

    public AdminRegisterRequest() {
        super();
    }

    public AdminRegisterRequest(Long id,
                                Long adminId,
                                String username,
                                String fullName,
                                String email,
                                String password,
                                Date dateOfBirth,
                                String address,
                                String contactNumber) {
        super(id, username, fullName, email, password, dateOfBirth, address, contactNumber);
        this.adminId = adminId;
    }


    public Long getAdminId() {
        return adminId;
    }

    public void setAdminId(Long adminId) {
        this.adminId = adminId;
    }
}
