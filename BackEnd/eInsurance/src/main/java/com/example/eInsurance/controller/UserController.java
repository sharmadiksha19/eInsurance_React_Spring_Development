package com.example.alcaline.controller;

import com.example.alcaline.dto.AddUserRequest;
import com.example.alcaline.dto.LoginRequest;
import com.example.alcaline.dto.RegisterRequest;
import com.example.alcaline.service.AdminService;
import com.example.alcaline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.alcaline.entity.User;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private AdminService adminService;

    @PostMapping("/register")
    public  String registerUser(@RequestBody RegisterRequest registerRequest){
        String id =userService.RegisterUser(registerRequest);
        return id;
    }

    @PostMapping("/login")
    public ResponseEntity<?> LoginUser(@RequestBody LoginRequest loginRequest){
        User user = userService.LoginUser(loginRequest);
        if (user!=null){
            return  ResponseEntity.ok(user);
        }
        return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> allUsers = userService.getAllUsers();
        return ResponseEntity.ok(allUsers);
    }

    @PostMapping("/addUser")
    public String addUser(@RequestBody AddUserRequest addUserRequest) {
        String id = userService.addUser(addUserRequest);
        return id;
    }

    @PutMapping("/editUser/{userId}")
    public ResponseEntity<String> editUser(@PathVariable Long userId, @RequestBody AddUserRequest editUserRequest) {
        String updatedUserId = userService.editUser(userId, editUserRequest);
        return ResponseEntity.ok(updatedUserId);
    }

    @DeleteMapping("/deleteUser/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
        String deletedUserId = userService.deleteUser(userId);
        return ResponseEntity.ok(deletedUserId);
    }




}