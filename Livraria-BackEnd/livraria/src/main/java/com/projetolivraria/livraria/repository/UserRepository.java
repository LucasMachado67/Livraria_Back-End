package com.projetolivraria.livraria.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.projetolivraria.livraria.model.user.User;


public interface UserRepository extends JpaRepository<User, Integer>{

    UserDetails findByLogin(String login);

    List<User> findByRole(String role);
}
