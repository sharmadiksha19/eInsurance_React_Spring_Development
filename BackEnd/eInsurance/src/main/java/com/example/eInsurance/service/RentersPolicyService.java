package com.example.alcaline.service;

import com.example.alcaline.customexceptions.CustomerExceptionHandling;
import com.example.alcaline.dto.RentersPolicyRequest;
import com.example.alcaline.entity.Customer;
import com.example.alcaline.entity.HealthPolicy;
import com.example.alcaline.entity.RentersPolicy;
import com.example.alcaline.entity.Transaction;
import com.example.alcaline.repository.CustomerRepository;
import com.example.alcaline.repository.RentersPolicyRepository;
import com.example.alcaline.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class RentersPolicyService {

    @Autowired
    RentersPolicyRepository rentersPolicyRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    TransactionRepository transactionRepository;

    public String createRentersPolicy(RentersPolicyRequest rpolicy, String customerId ) {
        Customer customer = customerRepository.findByUsername(customerId).orElse(null);
        if (customer != null) {
            // Customer exists, create a new policy
            RentersPolicy newRentersPolicy = new RentersPolicy();
            newRentersPolicy.toBean(rpolicy);
            newRentersPolicy.setCustomer(customer); // Set the customer for the policy

            Transaction newTransaction = new Transaction();
            newTransaction.toBean(rpolicy);
            newRentersPolicy.setTransaction(newTransaction);
            newTransaction.setCustomerMap(customer);

            RentersPolicy rentersPolicyData = rentersPolicyRepository.save(newRentersPolicy);

            Long transactionId = rentersPolicyData.getTransaction().getTransactionId();

            String policyInfo = "Policy ID :" + rentersPolicyData.getRentersPolicyId() + "  Transaction ID:" + transactionId;

            return policyInfo;
        } else {
            throw new CustomerExceptionHandling("Customer with ID " + customerId + " not found.");
        }






//
//        Customer customer = customerRepository.findById(policy.getCustomerMap().getCustomerId()).orElse(null);
//
//        if (customer != null) {
//            // Customer exists, create a new policy
//            Policy newPolicy = new Policy();
//            Transaction newTransaction = new Transaction();
//            newPolicy.toBean(policy);
//            newTransaction.toBean(policy);
//            newPolicy.setCustomerMap(customer); // Set the customer for the policy
//            newTransaction.setCustomerMap(customer);
//            Policy policyData = policyRepository.save(newPolicy);
//            transactionRepository.save(newTransaction);
//            return policyData.toBeanDto();
//        } else {
//            throw new CustomerExceptionHandling("Customer with ID " + policy.getCustomerMap().getCustomerId() + " not found.");
//        }



    }



}
