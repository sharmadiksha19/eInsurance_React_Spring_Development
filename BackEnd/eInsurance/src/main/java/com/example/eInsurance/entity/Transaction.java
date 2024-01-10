package com.example.alcaline.entity;

import com.example.alcaline.dto.HealthPolicyRequest;
import com.example.alcaline.dto.RentersPolicyRequest;
import com.example.alcaline.dto.VehiclePolicyRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(	name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionId;

    private String date;

    @NotBlank
    private double paymentAmount;

    @NotBlank
    @Size(max = 20)
    private String paymentMethod;

    private int policyId;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="customerid", nullable = false)
    private Customer customerMap;

    @JsonIgnore
    @OneToOne(mappedBy = "transaction")
    private HealthPolicy healthPolicy;

    @JsonIgnore
    @OneToOne(mappedBy = "transaction")
    private VehiclePolicy vehiclePolicy;

    @JsonIgnore
    @OneToOne(mappedBy = "transaction")
    private RentersPolicy rentersPolicy;

    // Constructors, getters, and setters

    public Transaction() {
        // Default constructor
    }

//    public Transaction(Long transactionId, Date date, long paymentAmount, String paymentMethod, int policyId) {
    public Transaction(Long transactionId, String date, long paymentAmount, String paymentMethod) {
        this.transactionId = transactionId;
        this.date = date;
        this.paymentAmount = paymentAmount;
        this.paymentMethod = paymentMethod;
//        this.policyId = policyId;
    }

    public Transaction toBean(HealthPolicyRequest hPolicy) {

        this.date = hPolicy.getDate();
        this.paymentAmount = hPolicy.getPaymentAmount();
        this.paymentMethod = hPolicy.getPaymentMethod();
//        this.policyId = hPolicy.getPolicyId();


        return this;

    }

    public Transaction toBean(VehiclePolicyRequest vPolicy) {

        this.date = vPolicy.getDate();
        this.paymentAmount = vPolicy.getPaymentAmount();
        this.paymentMethod = vPolicy.getPaymentMethod();
//        this.policyId = hPolicy.getPolicyId();


        return this;

    }

    public Transaction toBean(RentersPolicyRequest rPolicy) {

        this.date = rPolicy.getDate();
        this.paymentAmount = rPolicy.getPaymentAmount();
        this.paymentMethod = rPolicy.getPaymentMethod();
//        this.policyId = hPolicy.getPolicyId();


        return this;

    }
}



