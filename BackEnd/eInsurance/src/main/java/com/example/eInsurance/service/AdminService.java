package com.example.alcaline.service;

import com.example.alcaline.LoginMessage;
import com.example.alcaline.dto.AdminLoginRequest;
import com.example.alcaline.dto.AdminRegisterRequest;
import com.example.alcaline.entity.Admin;

import java.util.List;


public interface AdminService {
    LoginMessage adminLogin(AdminLoginRequest adminLoginRequest);
    String adminRegister(AdminRegisterRequest adminRegisterRequest);
    List<Admin> getAllAdmins();
    void initializeAdmin();
    String editAdmin(Long adminId, AdminRegisterRequest editAdminRequest);

    String deleteAdmin(Long adminId);
}
