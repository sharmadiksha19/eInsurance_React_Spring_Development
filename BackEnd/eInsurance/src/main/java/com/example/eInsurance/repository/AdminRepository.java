package com.example.alcaline.repository;

import com.example.alcaline.entity.Admin;
import com.example.alcaline.entity.EUsertype;
import com.example.alcaline.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

    Optional<Admin> findByUsernameIgnoreCase(String username);
    Optional<Admin> findByUsernameAndRole(String username, EUsertype role);

}
