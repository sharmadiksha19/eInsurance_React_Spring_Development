package com.example.alcaline.repository;

import com.example.alcaline.entity.Customer;
import com.example.alcaline.entity.HealthPolicy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HealthPolicyRepository extends JpaRepository<HealthPolicy, Long> {
 /*   @Query("SELECT h FROM HealthPolicy h WHERE h.customer.username = :username")
    List<HealthPolicy> findByUsername(@Param("username") String username);*/
/* List<HealthPolicy> findByCustomerUsername(String username);*/
}
