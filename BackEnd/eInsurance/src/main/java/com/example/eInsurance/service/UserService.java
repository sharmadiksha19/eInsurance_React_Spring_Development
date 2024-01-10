package com.example.alcaline.service;

import com.example.alcaline.LoginMessage;
import com.example.alcaline.dto.AddUserRequest;
import com.example.alcaline.dto.LoginRequest;
import com.example.alcaline.dto.RegisterRequest;
import com.example.alcaline.entity.User;
import java.util.List;

public interface UserService {
    String RegisterUser(RegisterRequest registerRequest);
    User LoginUser(LoginRequest loginRequest);
    List<User> getAllUsers();
    String addUser(AddUserRequest addUserRequest);

    String editUser(Long userId, AddUserRequest editUserRequest);
    String deleteUser(Long userId);


}
