package com.example.alcaline.entity;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
@Entity
public class DependentDetails {

    @Id
    private Long id;
    @NotNull
    private String name;
    @NotNull
    private Date dob;
    @ManyToOne
    private HealthPolicy policy;


    public void setId(Long id) {
        this.id = id;
    }

}



