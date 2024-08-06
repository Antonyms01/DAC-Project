package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.Product;
import com.example.demo.repositories.ProductRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
//The @Transactional annotation in Spring is used to manage transactions declaratively. 
//Transactions are a mechanism to ensure that a series of operations either all succeed or all fail,
//maintaining the consistency and integrity of the database

public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Create or Update a Product
//    public Product saveProduct(Product product) {
//        return productRepository.save(product);
//    }

    // Retrieve a Product by its ID
    public Optional<Product> getProductById(int productId) {
        return productRepository.findById(productId);
    }

    // Retrieve all Products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    
    public String updateProduct(int productId, Product updatedProduct) {
        // Check if the product exists
        Optional<Product> existingProductOpt = productRepository.findById(productId);
        
        if (existingProductOpt.isPresent()) {
            Product existingProduct = existingProductOpt.get();
            
            // Update fields
            existingProduct.setName(updatedProduct.getName());
            existingProduct.setPrice(updatedProduct.getPrice());
            existingProduct.setSubcategoryId(updatedProduct.getSubcategoryId());
            existingProduct.setBrandName(updatedProduct.getBrandName());
            existingProduct.setDescription(updatedProduct.getDescription());
            existingProduct.setStockQuantity(updatedProduct.getStockQuantity());
            existingProduct.setRating(updatedProduct.getRating());
           // existingProduct.setImageId(updatedProduct.getImageId());

            // Save updated product
            return "Product updated successfully";
        } else {
        	return "Product with ID " + productId + " not found";
        }
    }
    // Delete a Product by its ID
    public void deleteProduct(int productId) {
        productRepository.deleteById(productId);
    }

    public String addProduct(Product product) {
        try {
            productRepository.save(product);
            return "Product added successfully";
        } catch (Exception e) {
            return "Error adding product: " + e.getMessage();
        }
    }
}
