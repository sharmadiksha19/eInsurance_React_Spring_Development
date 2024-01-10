package com.example.alcaline.service;

import com.example.alcaline.LoginMessage;
import com.example.alcaline.dto.AddUserRequest;
import com.example.alcaline.dto.LoginRequest;
import com.example.alcaline.dto.RegisterRequest;
import com.example.alcaline.entity.*;
import com.example.alcaline.repository.AdminRepository;
import com.example.alcaline.repository.CustomerRepository;
import com.example.alcaline.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private CustomerRepository customerRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


    @Override
    public String RegisterUser(RegisterRequest registerRequest) {

        try {
            String[] arr = registerRequest.getFullName().split(" ");
            String firstName = arr[0], lastName = arr[1];
            User user = new User(
                    registerRequest.getId(),
                    registerRequest.getUsername(),
                    registerRequest.getFullName(),
                    registerRequest.getEmail(),
                    passwordEncoder.encode(registerRequest.getPassword()), // Hashing the password
                    registerRequest.getDateOfBirth(),
                    registerRequest.getAddress(),
                    registerRequest.getContactNumber()
            );
            userRepository.save(user);
            Customer customer = new Customer(
                    registerRequest.getUsername(),
                    firstName,
                    lastName,
                    registerRequest.getGender(),
                    registerRequest.getAddress()

            );
            customerRepository.save(customer);

            return registerRequest.getUsername();
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            return "Error during registration";
        }
    }

    @Override
    public User LoginUser(LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByUsernameIgnoreCase(loginRequest.getUsername());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            String encodedPassword = user.getPassword();

            if (passwordEncoder.matches(loginRequest.getPassword(), encodedPassword)) {
                return user;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public String addUser(AddUserRequest addUserRequest) {
        try {
            if (addUserRequest.getRole() == EUsertype.ADMIN) {
                Admin admin = new Admin(
                        addUserRequest.getId(),
                        addUserRequest.getUsername(),
                        addUserRequest.getFullName(),
                        addUserRequest.getEmail(),
                        passwordEncoder.encode(addUserRequest.getPassword()),
                        addUserRequest.getDateOfBirth(),
                        addUserRequest.getAddress(),
                        addUserRequest.getContactNumber()
                );
                adminRepository.save(admin);
                return admin.getUsername();
            } else {
                User user = new User(
                        addUserRequest.getId(),
                        addUserRequest.getUsername(),
                        addUserRequest.getFullName(),
                        addUserRequest.getEmail(),
                        passwordEncoder.encode(addUserRequest.getPassword()),
                        addUserRequest.getDateOfBirth(),
                        addUserRequest.getAddress(),
                        addUserRequest.getContactNumber()
                );
                userRepository.save(user);
                return user.getUsername();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Error during Adding user";
        }
    }
    @Override
    public String editUser(Long userId, AddUserRequest editUserRequest) {
        Optional<User> existingUser = userRepository.findById(userId);
        if (existingUser.isPresent()) {
            try {
                User userToUpdate = existingUser.get();
                userToUpdate.setUsername(editUserRequest.getUsername());
                userToUpdate.setFullName(editUserRequest.getFullName());
                userToUpdate.setEmail(editUserRequest.getEmail());
                userToUpdate.setAddress(editUserRequest.getAddress());
                userToUpdate.setContactNumber(editUserRequest.getContactNumber());

                userRepository.save(userToUpdate);
                return userToUpdate.getUsername();
            } catch (Exception e) {
                e.printStackTrace(); // Log the exception
                return "Error during user update";
            }
        } else {
            return "User not found";
        }
    }

    @Override
    public String deleteUser(Long userId) {
        Optional<User> userToDelete = userRepository.findById(userId);
        if (userToDelete.isPresent()) {
            try {
                userRepository.delete(userToDelete.get());
                return userToDelete.get().getUsername();
            } catch (Exception e) {
                e.printStackTrace(); // Log the exception
                return "Error during user deletion";
            }
        } else {
            return "User not found";
        }
    }


}