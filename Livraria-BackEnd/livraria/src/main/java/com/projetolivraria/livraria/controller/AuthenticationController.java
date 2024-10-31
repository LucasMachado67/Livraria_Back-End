package com.projetolivraria.livraria.controller;

import org.springframework.web.bind.annotation.RestController;

import com.projetolivraria.livraria.model.user.User;
import com.projetolivraria.livraria.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Configuration
@RestController
public class AuthenticationController {
    
    @Autowired
    private UserRepository actionUser;

    @PostMapping("/register")
    public User registerUser(@RequestBody User u) {
        
        return actionUser.save(u);
    }
    
    
}
