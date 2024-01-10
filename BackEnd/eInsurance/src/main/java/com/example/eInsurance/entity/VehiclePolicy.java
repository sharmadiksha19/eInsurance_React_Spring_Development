package com.example.alcaline.entity;

import com.example.alcaline.dto.VehiclePolicyRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Getter
@Setter
@Entity
@Table(	name = "vehiclePolicy")
public class VehiclePolicy{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vehiclePolicyId;

    @Size(max = 100)
    private String vehicleMake;

    @Size(max = 100)
    private String vehicleModel;

    @Size(max = 50)
    private int vehicleYear;

    @Size(max = 50)
    private String vin;

    @Size(max = 50)
    private String drivingLicenseNumber;

    @Enumerated
    @Size(max = 50)
    private VehicleUsage vehicleUsage; // i.e. personal, commercial

    private int mileage;

    @Size(max = 50)
    private String licensePlateNumber;

    private String safetyFeatures;

    @OneToOne(cascade = CascadeType.ALL)
    private Transaction transaction;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "customerId")
    private Customer customer;

    public VehiclePolicy(){

    }

    public VehiclePolicy(Long vehiclePolicyId, String vehicleMake, String vehicleModel, int vehicleYear, String vin, String drivingLicenseNumber, VehicleUsage vehicleUsage, int mileage, String licensePlateNumber, String safetyFeatures) {
        this.vehiclePolicyId = vehiclePolicyId;
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

    public VehiclePolicy(String vehicleMake, String vehicleModel, int vehicleYear, String vin, String drivingLicenseNumber, VehicleUsage vehicleUsage, int mileage, String licensePlateNumber, String safetyFeatures) {
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

    public VehiclePolicy toBean(VehiclePolicyRequest vPolicy) {

        this.vehicleMake = vPolicy.getVehicleMake();
        this.vehicleModel = vPolicy.getVehicleModel();
        this.vehicleYear = vPolicy.getVehicleYear();
        this.vin = vPolicy.getVin();
        this.drivingLicenseNumber = vPolicy.getDrivingLicenseNumber();
        this.vehicleUsage = vPolicy.getVehicleUsage();
        this.mileage = vPolicy.getMileage();
        this.licensePlateNumber = vPolicy.getLicensePlateNumber();
        this.safetyFeatures = vPolicy.getSafetyFeatures();


        return this;

    }

    public VehiclePolicyRequest toBeanDto(){

        VehiclePolicyRequest vp = new VehiclePolicyRequest(this.getVehicleMake(),this.getVehicleModel(),this.getVehicleYear(),this.getVin(),this.getDrivingLicenseNumber(),this.getVehicleUsage(),this.getMileage(),this.getLicensePlateNumber(),this.getSafetyFeatures());

        return vp;
    }
}
