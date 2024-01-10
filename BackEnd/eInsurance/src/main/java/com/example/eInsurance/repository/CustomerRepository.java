package com.example.alcaline.repository;

import com.example.alcaline.entity.Customer;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

//@NamedQueries({
//        @NamedQuery(
//                name = "Customer.findAllWithHealthPolicies",
//                query = "SELECT DISTINCT c FROM Customer c LEFT JOIN FETCH c.healthPolicies"
//        )
//})
@Repository
@Transactional
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Optional<Customer> findByUsername(String username);

///*    @Query("SELECT DISTINCT c FROM Customer c LEFT JOIN FETCH c.healthPolicies")
//    List<Customer> findAllWithHealthPolicies();*/
//  List<Customer> findAllWithHealthPolicies();



}
