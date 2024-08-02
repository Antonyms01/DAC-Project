package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.services.ProductService;

	@RestController
	@RequestMapping("/products")
	public class ProductController {

	    @Autowired
	    private ProductService productService;

	    @GetMapping("/")
	    public List<Product> getAllProducts() {
	        return productService.getAllProducts();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Product> getProductById(@PathVariable int id) {
	        Optional<Product> product = productService.getProductById(id);
	        if (product.isPresent()) {
	            return ResponseEntity.ok(product.get());
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

	    @PostMapping
	    public Product addProduct(@RequestBody Product product) {
	        return productService.addProduct(product);
	    }

	    @PutMapping("/{id}")
	    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
	        return productService.updateProduct(id, product);
	    }

	    @DeleteMapping("/{id}")
	    public void deleteProduct(@PathVariable int id) 
	    {
	        productService.deleteProduct(id);
	    }
	}

