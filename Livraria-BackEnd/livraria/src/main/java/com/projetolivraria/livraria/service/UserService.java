package com.projetolivraria.livraria.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetolivraria.livraria.model.user.User;
import com.projetolivraria.livraria.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository actionUser;

    public List<User> findRoleAdmin(String role){
        return actionUser.findByRole(role);
    }

}
