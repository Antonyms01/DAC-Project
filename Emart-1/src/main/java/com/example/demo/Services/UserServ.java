package com.example.demo.Services;

import com.example.demo.entities.User;

public interface UserServ {

    // Register a User
    String registerUser(User user);

    // Retrieve a User by its ID
    User getUserById(int id);
}
