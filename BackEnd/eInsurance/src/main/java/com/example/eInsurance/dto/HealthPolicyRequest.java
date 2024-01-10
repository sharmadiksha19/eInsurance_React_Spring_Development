package com.example.alcaline.dto;

import com.example.alcaline.entity.BloodGroup;
import com.example.alcaline.entity.Customer;
import com.example.alcaline.entity.Employment;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class HealthPolicyRequest {

    private Employment employement;


    private Double height;


    private Double weight;

    private BloodGroup bloodGroup;

    private int dependent;

    private Double annualIncome;

    private String otherSourceOfIncome;

    private String healthHistory;

    private String familyMedicalHistory;

    private String existingInsuranceDetails;

    private String smoking;

    private String date;

    private double paymentAmount;

    private String paymentMethod;


    public HealthPolicyRequest() {

    }

    public HealthPolicyRequest(Employment employement, Double height, Double weight, BloodGroup bloodGroup, int dependent, Double annualIncome, String otherSourceOfIncome, String healthHistory, String familyMedicalHistory, String existingInsuranceDetails, String smoking) {
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

//    public HealthPolicyRequest(Employment employement, Double height, Double weight, BloodGroup bloodGroup, int dependent, Double annualIncome, String otherSourceOfIncome, String healthHistory, String familyMedicalHistory, String existingInsuranceDetails, boolean smoking, Date date, double paymentAmount, String paymentMethod, Customer customer) {
    public HealthPolicyRequest(Employment employement, Double height, Double weight, BloodGroup bloodGroup, int dependent, Double annualIncome, String otherSourceOfIncome, String healthHistory, String familyMedicalHistory, String existingInsuranceDetails, String smoking, String date, double paymentAmount, String paymentMethod) {
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
        this.date = date;
        this.paymentAmount = paymentAmount;
        this.paymentMethod = paymentMethod;
//        this.customer= customer;
    }

}
