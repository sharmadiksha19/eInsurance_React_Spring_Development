package com.example.alcaline.entity;

import com.example.alcaline.dto.RegisterRequest;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;

    @NotBlank
    @Size(max = 20)
    private String username;


//    @NotBlank
//    @Size(max = 50)
//    @Email
//    private String email;

    @NotBlank
    @Size(max = 20)
    private String firstName;

    @NotBlank
    @Size(max = 20)
    private String lastName;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @NotBlank
    @Size(max = 120)
    private String address;


    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<HealthPolicy> healthPolicies;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<RentersPolicy> rentersPolicies;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<VehiclePolicy> vehiclePolicies;

    public Customer() {

    }

 public Customer(Long customerId, String firstName, String lastName, String address) {

        this.customerId = customerId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.address = address;
//

    }

    public Customer(String username, String firstName, String lastName, Gender gender, String address) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.address = address;
    }


    public Customer toBean(RegisterRequest user) {

        this.username = user.getUsername();
        this.address = user.getAddress();
        return this;

    }


}
