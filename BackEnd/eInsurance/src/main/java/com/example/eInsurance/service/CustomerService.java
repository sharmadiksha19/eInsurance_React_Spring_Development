package com.example.alcaline.service;

import com.example.alcaline.customexceptions.CustomerExceptionHandling;
import com.example.alcaline.entity.BloodGroup;
import com.example.alcaline.entity.Customer;
import com.example.alcaline.entity.VehiclePolicy;
import com.example.alcaline.repository.CustomerRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    public Customer getCustomerDetails(String username) {
        Customer customer = customerRepository.findByUsername(username).get();

        customer.getHealthPolicies().toString();
        customer.getRentersPolicies().toString();
        customer.getVehiclePolicies().toString();


        return customer;


    }








}
