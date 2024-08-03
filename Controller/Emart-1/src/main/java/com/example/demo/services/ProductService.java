package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Product;
import com.example.demo.repositories.ProductRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(int id) {
        return productRepository.findById(id);
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }


    
    public Product updateProduct(int id, Product product) {
        Optional<Product> existingProduct = productRepository.findById(id);
        if (existingProduct.isPresent()) {
            Product updateProduct = existingProduct.get();
            updateProduct.setName(product.getName());
            updateProduct.setPrice(product.getPrice());
            updateProduct.setDescription(product.getDescription());
            updateProduct.setStockQuantity(product.getStockQuantity());
            updateProduct.setRating(product.getRating());
            updateProduct.setImageId(product.getImageId());
            updateProduct.setBrandId(product.getBrandId());
            updateProduct.setSubcategoryId(product.getSubcategoryId());
            
            // Set other fields as needed
            return productRepository.save(updateProduct);
        } else {
            throw new RuntimeException("Product not found with id " + id);
        }
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }
}
