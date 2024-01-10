package com.example.alcaline.repository;

import com.example.alcaline.entity.Customer;
import com.example.alcaline.entity.HealthPolicy;
import com.example.alcaline.entity.RentersPolicy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RentersPolicyRepository extends JpaRepository<RentersPolicy, Long> {

}
