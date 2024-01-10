package com.example.alcaline.service;

import com.example.alcaline.LoginMessage;
import com.example.alcaline.dto.AdminLoginRequest;
import com.example.alcaline.dto.AdminRegisterRequest;
import com.example.alcaline.entity.Admin;
import com.example.alcaline.entity.EUsertype;
import com.example.alcaline.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;


@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public void initializeAdmin() {
        Optional<Admin> admin = adminRepository.findByUsernameAndRole("admin", EUsertype.ADMIN);
        if (admin.isEmpty()) {
            // Create the admin user if it does not exist
            Admin initialAdmin = new Admin(
                    null,
                    "admin",
                    "Admin User",
                    "admin@example.com",
                    passwordEncoder.encode("adminPassword"),
                    new Date(System.currentTimeMillis()),
                    "Admin Address",
                    "1234567890"
            );
            adminRepository.save(initialAdmin);
        }
    }

    @Override
    public LoginMessage adminLogin(AdminLoginRequest adminLoginRequest) {
        Optional<Admin> admin = adminRepository.findByUsernameAndRole(adminLoginRequest.getUsername(), EUsertype.ADMIN);
        if (admin.isPresent())
        {
            String password = adminLoginRequest.getPassword();
            String encodedPassword = admin.get().getPassword();
            // Log statements
            System.out.println("Provided Password: " + password);
            System.out.println("Encoded Password: " + encodedPassword);

            if (passwordEncoder.matches(password, encodedPassword)) {
                return new LoginMessage("Admin Login Success", true);
            } else {
                return new LoginMessage("Admin Login Failed", false);
            }
        } else {
            return new LoginMessage("Admin Username not exists", false);
        }
    }

    @Override
    public String adminRegister(AdminRegisterRequest adminRegisterRequest) {
        try {
            Admin admin = new Admin(
                    adminRegisterRequest.getId(),
                    adminRegisterRequest.getUsername(),
                    adminRegisterRequest.getFullName(),
                    adminRegisterRequest.getEmail(),
                    passwordEncoder.encode(adminRegisterRequest.getPassword()), // Hashing the password
                    adminRegisterRequest.getDateOfBirth(),
                    adminRegisterRequest.getAddress(),
                    adminRegisterRequest.getContactNumber()
            );
            adminRepository.save(admin);
            return admin.getUsername();
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            return "Error during registration";
        }
    }

    @Override
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @Override
    public String editAdmin(Long adminId, AdminRegisterRequest editAdminRequest) {
        Optional<Admin> existingAdmin = adminRepository.findById(adminId);
        if (existingAdmin.isPresent()) {
            try {
                Admin adminToUpdate = existingAdmin.get();
                adminToUpdate.setUsername(editAdminRequest.getUsername());
                adminToUpdate.setFullName(editAdminRequest.getFullName());
                adminToUpdate.setEmail(editAdminRequest.getEmail());
                adminToUpdate.setAddress(editAdminRequest.getAddress());
                adminToUpdate.setContactNumber(editAdminRequest.getContactNumber());

                adminRepository.save(adminToUpdate);
                return adminToUpdate.getUsername();
            } catch (Exception e) {
                e.printStackTrace(); // Log the exception
                return "Error during admin update";
            }
        } else {
            return "Admin not found";
        }
    }

    @Override
    public String deleteAdmin(Long adminId) {
        Optional<Admin> adminToDelete = adminRepository.findById(adminId);
        if (adminToDelete.isPresent()) {
            try {
                adminRepository.delete(adminToDelete.get());
                return adminToDelete.get().getUsername();
            } catch (Exception e) {
                e.printStackTrace(); // Log the exception
                return "Error during admin deletion";
            }
        } else {
            return "Admin not found";
        }
    }
}
