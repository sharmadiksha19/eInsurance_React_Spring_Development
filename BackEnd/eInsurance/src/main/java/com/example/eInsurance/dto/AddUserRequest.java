package com.example.alcaline.dto;

import com.example.alcaline.entity.EUsertype;

import java.sql.Date;

public class AddUserRequest extends RegisterRequest {
    private EUsertype role;
    public AddUserRequest() {
        super();
    }

    public AddUserRequest(Long id,
                                String username,
                                String fullName,
                                String email,
                                String password,
                                Date dateOfBirth,
                                String address,
                                String contactNumber,
                                EUsertype role) {
        super(id, username, fullName, email, password, dateOfBirth, address, contactNumber);
        this.role = role;
    }

    public EUsertype getRole() {
        return role;
    }

    public void setRole(EUsertype role) {
        this.role = role;
    }
}
