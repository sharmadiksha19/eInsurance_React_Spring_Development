package com.example.alcaline.entity;

import com.example.alcaline.dto.HealthPolicyRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Getter
@Setter
@Entity
@Table(name = "healthPolicy")
public class HealthPolicy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long healthPolicyId;

    @Enumerated(EnumType.STRING)
    private Employment employement;

    @Size(max = 50)
    private Double height;

    @Size
    private Double weight;

    @Enumerated(EnumType.STRING)
    private BloodGroup bloodGroup;

    @Size(max = 5)
    private int dependent;

    @Size(max = 50)
    private Double annualIncome;

    @Size(max = 100)
    private String otherSourceOfIncome;

    @Size(max = 50)
    private String healthHistory;

    @Size(max = 100)
    private String familyMedicalHistory;

    @Size(max = 100)
    private String existingInsuranceDetails;

    private String smoking;

    @OneToOne (cascade = CascadeType.ALL)
    private Transaction transaction;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "customerId")
    private Customer customer;

    public HealthPolicy() {

    }

    public HealthPolicy(Long healthPolicyId, Employment employement, Double height, Double weight, BloodGroup bloodGroup, int dependent, Double annualIncome, String otherSourceOfIncome, String healthHistory, String familyMedicalHistory, String existingInsuranceDetails, String smoking) {
        this.healthPolicyId = healthPolicyId;
        this.employement = employement;
        this.height = height;
        this.weight = weight;
        this.bloodGroup = bloodGroup;
        this.dependent = dependent;
        this.annualIncome = annualIncome;
        this.otherSourceOfIncome = otherSourceOfIncome;
        this.healthHistory = healthHistory;
        this.familyMedicalHistory = familyMedicalHistory;
        this.existingInsuranceDetails = existingInsuranceDetails;
        this.smoking = smoking;
    }

    public HealthPolicy toBean(HealthPolicyRequest hPolicy) {

        this.employement = hPolicy.getEmployement();
        this.height = hPolicy.getHeight();
        this.weight = hPolicy.getWeight();
        this.bloodGroup = hPolicy.getBloodGroup();
        this.dependent = hPolicy.getDependent();
        this.annualIncome = hPolicy.getAnnualIncome();
        this.otherSourceOfIncome = hPolicy.getOtherSourceOfIncome();
        this.healthHistory = hPolicy.getHealthHistory();
        this.familyMedicalHistory = hPolicy.getFamilyMedicalHistory();
        this.existingInsuranceDetails = hPolicy.getExistingInsuranceDetails();
        this.smoking = hPolicy.getSmoking();

        return this;

    }

    public HealthPolicy(Long healthPolicyId, Transaction transaction) {
        this.healthPolicyId = healthPolicyId;
        this.transaction = transaction;
    }

//    public HealthPolicyRequest toBeanDto() {
//
//        HealthPolicyRequest hp = new HealthPolicyRequest(this.getEmployement(), this.getHeight(), this.getWeight(), this.getBloodGroup(), this.getDependent(), this.getAnnualIncome(), this.getOtherSourceOfIncome(), this.getHealthHistory(), this.getFamilyMedicalHistory(), this.getExistingInsuranceDetails(), this.isSmoking());
//
//        return hp;
//    }

    public HealthPolicy PolicyReturn() {

        HealthPolicy hp = new HealthPolicy(this.getHealthPolicyId(),this.getTransaction());


        return hp;
    }
}
