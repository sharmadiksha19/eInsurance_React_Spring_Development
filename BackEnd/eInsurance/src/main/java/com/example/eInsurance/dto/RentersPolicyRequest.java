package com.example.alcaline.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.management.ConstructorParameters;
import java.util.Date;

@NoArgsConstructor
@Getter
@Setter
public class RentersPolicyRequest {
    private String propertyType;
    private double estimatedPropertyValue;
    private String leaseAgreementDetails;
    private String hasPets;
    private String petDetails;
    private int numberOfOccupants;
    private String propertyLocation;
    private int numberOfBedrooms;
    private int numberOfBathrooms;
    private double squareFootage;

    private String date;

    private double paymentAmount;

    private String paymentMethod;

    public RentersPolicyRequest(String propertyType, double estimatedPropertyValue, String leaseAgreementDetails, String hasPets, String petDetails, int numberOfOccupants, String propertyLocation, int numberOfBedrooms, int numberOfBathrooms, double squareFootage) {
        this.propertyType = propertyType;
        this.estimatedPropertyValue = estimatedPropertyValue;
        this.leaseAgreementDetails = leaseAgreementDetails;
        this.hasPets = hasPets;
        this.petDetails = petDetails;
        this.numberOfOccupants = numberOfOccupants;
        this.propertyLocation = propertyLocation;
        this.numberOfBedrooms = numberOfBedrooms;
        this.numberOfBathrooms = numberOfBathrooms;
        this.squareFootage = squareFootage;
    }


}
