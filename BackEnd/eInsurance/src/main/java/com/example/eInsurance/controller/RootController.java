package com.example.alcaline.controller;

import com.example.alcaline.customexceptions.UserExceptionHandling;
import com.example.alcaline.dto.LoginRequest;
import com.example.alcaline.entity.User;
import com.example.alcaline.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Objects;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class RootController {

    @Autowired
    UserServiceImpl userServiceImpl;

   /* @PostMapping
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        User user = userServiceImpl.findUser(loginRequest.getUsername());
        if (Objects.isNull(user)) {
            throw new UserExceptionHandling("User" + loginRequest.getUsername() + "not found");
        }

        if (loginRequest.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("User successfully logged in");
        }
        return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
    }*/
}
