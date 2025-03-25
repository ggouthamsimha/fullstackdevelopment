package com.example.FSD_1.controller;



import com.example.FSD_1.model.User;
import com.example.FSD_1.model.User.*;
import com.example.FSD_1.repository.UserRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepo UserRepo;

    // Register a new use
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        System.out.println("Hello World!");
        System.out.println("Received User : " + user); //
        UserRepo.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }



}







