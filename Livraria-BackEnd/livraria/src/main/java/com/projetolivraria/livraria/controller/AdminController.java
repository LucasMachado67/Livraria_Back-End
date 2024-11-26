package com.projetolivraria.livraria.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.projetolivraria.livraria.model.Admin;
import com.projetolivraria.livraria.service.AdminService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Configuration
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
    
    @Autowired
    private AdminService service;

    @PostMapping("/newAdmin")
    public ResponseEntity<Admin> newAdmin(@RequestBody Admin admin) {
        return ResponseEntity.ok(service.saveNewAdmin(admin));
    }

    @GetMapping("/AllAdmins")
    public Iterable<Admin> AllAdmins(){
        List<Admin> admins = service.allAdmins();
        return admins;
    }
    
}
