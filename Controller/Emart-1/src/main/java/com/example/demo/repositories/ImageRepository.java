package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entities.ImageUrl;

public interface ImageRepository extends JpaRepository<ImageUrl,Integer> {

}
