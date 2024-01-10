package com.example.alcaline.dto;

import com.example.alcaline.entity.VehicleUsage;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class VehiclePolicyRequest {



        private String vehicleMake;

        private String vehicleModel;

        private int vehicleYear;

        private String vin;

        private String drivingLicenseNumber;

        private VehicleUsage vehicleUsage;

        private int mileage;

        private String licensePlateNumber;

        private String safetyFeatures;

        private String date;

        private double paymentAmount;

        private String paymentMethod;

//        private Customer customer;


        public VehiclePolicyRequest() {
        }

        public VehiclePolicyRequest(String vehicleMake, String vehicleModel, int vehicleYear, String vin, String drivingLicenseNumber, VehicleUsage vehicleUsage, int mileage, String licensePlateNumber, String safetyFeatures) {
                this.vehicleMake = vehicleMake;
                this.vehicleModel = vehicleModel;
                this.vehicleYear = vehicleYear;
                this.vin = vin;
                this.drivingLicenseNumber = drivingLicenseNumber;
                this.vehicleUsage = vehicleUsage;
                this.mileage = mileage;
                this.licensePlateNumber = licensePlateNumber;
                this.safetyFeatures = safetyFeatures;
        }




}
