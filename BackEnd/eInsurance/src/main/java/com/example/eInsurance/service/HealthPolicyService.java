package com.example.alcaline.service;

import com.example.alcaline.customexceptions.CustomerExceptionHandling;
import com.example.alcaline.dto.HealthPolicyRequest;

import com.example.alcaline.entity.Customer;
import com.example.alcaline.entity.HealthPolicy;

import com.example.alcaline.entity.Transaction;
import com.example.alcaline.entity.VehiclePolicy;
import com.example.alcaline.repository.*;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@Transactional
public class HealthPolicyService {

    @Autowired
    HealthPolicyRepository healthPolicyRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    TransactionRepository transactionRepository;
    @Autowired
    RentersPolicyRepository rentersPolicyRepository;

    @Autowired
    VehiclePolicyRepository vehiclePolicyRepository;

   /* public List<HealthPolicy> getHealthPoliciesByUsername(String username) {
        return healthPolicyRepository.findByUsername(username);
    }*/

/*    public List<HealthPolicy> getHealthPoliciesByUsername(String username) {
        return healthPolicyRepository.findByCustomerUsername(username);
    }*/

    public String createHealthPolicy(HealthPolicyRequest hPolicy, String customerId) {

        Customer customer = customerRepository.findByUsername(customerId).orElse(null);
        if (customer != null) {
            // Customer exists, create a new policy
            HealthPolicy newHealthPolicy = new HealthPolicy();
            newHealthPolicy.toBean(hPolicy);
            newHealthPolicy.setCustomer(customer); // Set the customer for the policy

            Transaction newTransaction = new Transaction();
            newTransaction.toBean(hPolicy);
            newHealthPolicy.setTransaction(newTransaction);
            newTransaction.setCustomerMap(customer);

            HealthPolicy HealthPolicyData = healthPolicyRepository.save(newHealthPolicy);

            Long transactionId = HealthPolicyData.getTransaction().getTransactionId();

            String policyInfo = "Policy ID :" + HealthPolicyData.getHealthPolicyId() + "  Transaction ID:" + transactionId;
//            Long transactionId = HealthPolicyData.getTransaction().getTransactionId();


            return policyInfo;

        } else {
            throw new CustomerExceptionHandling("Customer with Username " + customerId + " not found.");
        }


    }


    public long getHealthPolicyCount() {
        return healthPolicyRepository.count();
    }

    public long getVehiclePolicyCount() {
        return vehiclePolicyRepository.count();
    }

    public long getRentPolicyCount() {
        return rentersPolicyRepository.count();
    }

    public long getCustomerCount() {
        return customerRepository.count();

    }





}
