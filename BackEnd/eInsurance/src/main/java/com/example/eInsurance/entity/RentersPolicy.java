package com.example.alcaline.entity;

import com.example.alcaline.dto.RentersPolicyRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Getter
@Setter
@Entity
@Table(	name = "rentersPolicy")
public class RentersPolicy {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long rentersPolicyId;

        @Size(max = 50)
        private String propertyType;

        private double estimatedPropertyValue;

        @Size(max = 150)
        private String leaseAgreementDetails;

        private String hasPets;

        @Size(max = 50)
        private String petDetails;

        private int numberOfOccupants;

        @Size(max = 100)
        private String propertyLocation;

        private int numberOfBedrooms;
        private int numberOfBathrooms;
        private double squareFootage;

        @OneToOne(cascade = CascadeType.ALL)
        private Transaction transaction;

        @JsonIgnore
        @ManyToOne
        @JoinColumn(name = "customerId")
        private Customer customer;

        public RentersPolicy(){

        }

        public RentersPolicy(Long rentersPolicyId, String propertyType, double estimatedPropertyValue, String leaseAgreementDetails, String hasPets, String petDetails, int numberOfOccupants, String propertyLocation, int numberOfBedrooms, int numberOfBathrooms, double squareFootage) {
            this.rentersPolicyId = rentersPolicyId;
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

        public RentersPolicy toBean(RentersPolicyRequest rPolicy) {
            this.propertyType = rPolicy.getPropertyType();
            this.estimatedPropertyValue = rPolicy.getEstimatedPropertyValue();
            this.leaseAgreementDetails = rPolicy.getLeaseAgreementDetails();
            this.hasPets = rPolicy.getHasPets();
            this.petDetails = rPolicy.getPetDetails();
            this.numberOfOccupants = rPolicy.getNumberOfOccupants();
            this.propertyLocation = rPolicy.getPropertyLocation();
            this.numberOfBedrooms = rPolicy.getNumberOfBedrooms();
            this.numberOfBathrooms = rPolicy.getNumberOfBathrooms();
            this.squareFootage = rPolicy.getSquareFootage();

            return this;
        }

        public RentersPolicyRequest toBeanDto(){

            RentersPolicyRequest rp = new RentersPolicyRequest(this.getPropertyType(),this.getEstimatedPropertyValue(),this.getLeaseAgreementDetails(),this.getHasPets(),this.getPetDetails(),this.getNumberOfOccupants(),this.getPropertyLocation(),this.getNumberOfBedrooms(),this.getNumberOfBathrooms(),this.getSquareFootage());

            return rp;
        }
}
