package com.example.alcaline.service;

import com.example.alcaline.customexceptions.CustomerExceptionHandling;
import com.example.alcaline.dto.VehiclePolicyRequest;
import com.example.alcaline.entity.*;
import com.example.alcaline.repository.CustomerRepository;
import com.example.alcaline.repository.TransactionRepository;
import com.example.alcaline.repository.VehiclePolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class VehiclePolicyService {

    @Autowired
    VehiclePolicyRepository vehiclePolicyRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    TransactionRepository transactionRepository;

    public String createVehiclePolicy(VehiclePolicyRequest vPolicy, String customerId) {
        Customer customer = customerRepository.findByUsername(customerId).orElse(null);
        if (customer != null) {
            // Customer exists, create a new policy
            VehiclePolicy newVehiclePolicy = new VehiclePolicy();
            newVehiclePolicy.toBean(vPolicy);
            newVehiclePolicy.setCustomer(customer); // Set the customer for the policy

            Transaction newTransaction = new Transaction();
            newTransaction.toBean(vPolicy);
            newVehiclePolicy.setTransaction(newTransaction);
            newTransaction.setCustomerMap(customer);

            VehiclePolicy VehiclePolicyData = vehiclePolicyRepository.save(newVehiclePolicy);

            Long transactionId = VehiclePolicyData.getTransaction().getTransactionId();

            String policyInfo = "Policy ID :" + VehiclePolicyData.getVehiclePolicyId() + "  Transaction ID:" + transactionId;

            return policyInfo;
        } else {
            throw new CustomerExceptionHandling("Customer with ID " + customerId + " not found.");
        }

    }




}
