package com.example.alcaline.controller;

import com.example.alcaline.customexceptions.CustomerExceptionHandling;
import com.example.alcaline.dto.HealthPolicyRequest;
import com.example.alcaline.dto.RentersPolicyRequest;
import com.example.alcaline.dto.VehiclePolicyRequest;
import com.example.alcaline.entity.Customer;
import com.example.alcaline.entity.HealthPolicy;
import com.example.alcaline.entity.RentersPolicy;
import com.example.alcaline.entity.VehiclePolicy;
import com.example.alcaline.service.CustomerService;
import com.example.alcaline.service.HealthPolicyService;
import com.example.alcaline.service.RentersPolicyService;
import com.example.alcaline.service.VehiclePolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @Autowired
    HealthPolicyService healthPolicyService;

    @Autowired
    VehiclePolicyService vehiclePolicyService;

    @Autowired
    RentersPolicyService rentersPolicyService;


    @GetMapping("/{username}")
    public ResponseEntity<Customer> getCustomerDetails (@PathVariable String username) {
        Customer cust = customerService.getCustomerDetails(username);

        if (Objects.isNull(cust)) {
            throw new CustomerExceptionHandling("Customer details for "+ username + " not found");
        }

        return ResponseEntity.ok(cust);
    }

    @PostMapping("/healthPolicy/{customerId}")
    public ResponseEntity<String>createHealthPolicy(@PathVariable String customerId, @RequestBody HealthPolicyRequest hPolicy){

        return ResponseEntity.ok(healthPolicyService.createHealthPolicy(hPolicy, customerId));

    }

    @PostMapping("/vehiclePolicy/{customerId}")
    public ResponseEntity<String>createVehiclePolicy(@PathVariable String customerId, @RequestBody VehiclePolicyRequest vPolicy){

        return ResponseEntity.ok(vehiclePolicyService.createVehiclePolicy(vPolicy, customerId));

    }

    @PostMapping("/rentersPolicy/{customerId}")
    public ResponseEntity<String>createRentersPolicy(@PathVariable String customerId, @RequestBody RentersPolicyRequest rPolicy){

        return ResponseEntity.ok(rentersPolicyService.createRentersPolicy(rPolicy, customerId));

    }







}
