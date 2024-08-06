package com.example.demo.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    public String registerUser(User user) {
        try {
            userRepository.save(user);
            return "User registered successfully";
        } catch (Exception e) {
            return "Error registering user: " + e.getMessage();
        }
    }
    

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

//    public User findByEmail(String email) {
//        return userRepository.findByUserEmail(email);
//    }


}
