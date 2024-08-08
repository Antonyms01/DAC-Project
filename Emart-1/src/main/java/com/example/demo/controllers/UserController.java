package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.DTO.UserDTO;
import com.example.demo.entities.User;
import com.example.demo.servicesImpl.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        
        String response = userService.registerUser(user);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/epoint/{userId}")
    public ResponseEntity<Integer> getEpoint(@PathVariable int userId) {
        int epoint = userService.getEpointByUserId(userId);
        return ResponseEntity.ok(epoint);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable int id) {
        User user = userService.getUserById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
}
