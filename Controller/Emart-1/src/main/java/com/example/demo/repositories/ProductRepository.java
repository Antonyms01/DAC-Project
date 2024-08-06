package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> 
//In the ProductRepository interface, the Integer type is used to specify the type of the primary key (ID) 
//for the Product entity.
{
}
