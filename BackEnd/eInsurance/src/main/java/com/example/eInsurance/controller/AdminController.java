package com.example.alcaline.controller;

import com.example.alcaline.LoginMessage;
import com.example.alcaline.dto.AdminLoginRequest;
import com.example.alcaline.dto.AdminRegisterRequest;
import com.example.alcaline.dto.LoginRequest;
import com.example.alcaline.entity.Admin;
import com.example.alcaline.entity.User;
import com.example.alcaline.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;


@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")

public class AdminController {

    @Autowired
    AdminService adminService;
    @Autowired
    HealthPolicyService healthPolicyService;

    @PostMapping("/login")
    public ResponseEntity<?> adminLogin(@RequestBody AdminLoginRequest adminLoginRequest) {
        LoginMessage loginMessage = adminService.adminLogin(adminLoginRequest);
        return ResponseEntity.ok(loginMessage);
    }

    @GetMapping("/getAllAdmins")
    public ResponseEntity<List<Admin>> getAllUsers() {
        List<Admin> allAdmins = adminService.getAllAdmins();
        return ResponseEntity.ok(allAdmins);
    }
    @PutMapping("/editAdmin/{adminId}")
    public ResponseEntity<String> editAdmin(@PathVariable Long adminId, @RequestBody AdminRegisterRequest editAdminRequest) {
        String updatedAdminId = adminService.editAdmin(adminId, editAdminRequest);
        return ResponseEntity.ok(updatedAdminId);
    }

    @DeleteMapping("/deleteAdmin/{adminId}")
    public ResponseEntity<String> deleteAdmin(@PathVariable Long adminId) {
        String deletedAdminId = adminService.deleteAdmin(adminId);
        return ResponseEntity.ok(deletedAdminId);
    }

    @GetMapping("/getData")
    public ResponseEntity<?> getHealthPolicyCount() {
        long health = healthPolicyService.getHealthPolicyCount();
        long vehicle = healthPolicyService.getVehiclePolicyCount();
        long rent = healthPolicyService.getRentPolicyCount();
        long customer = healthPolicyService.getCustomerCount();

        HashMap<String, Long> map = new HashMap<>();
        map.put("health", health);
        map.put("vehicle", vehicle);
        map.put("rent", rent);
        map.put("Customer", customer);
        return ResponseEntity.ok(map);
}
}
