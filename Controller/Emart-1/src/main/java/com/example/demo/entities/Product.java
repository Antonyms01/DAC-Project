package com.example.demo.entities;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.RequiredArgsConstructor;

@Entity
//@Data
//@RequiredArgsConstructor
//@AllArgsConstructor
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int productId;
    
    public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public double getPrice() {
		return price;
	}



	public void setPrice(double price) {
		this.price = price;
	}



	public int getSubcategoryId() {
		return subcategoryId;
	}



	public void setSubcategoryId(int subcategoryId) {
		this.subcategoryId = subcategoryId;
	}



	public int getBrandId() {
		return brandId;
	}



	public void setBrandId(int brandId) {
		this.brandId = brandId;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public int getStockQuantity() {
		return stockQuantity;
	}



	public void setStockQuantity(int stockQuantity) {
		this.stockQuantity = stockQuantity;
	}



	public int getRating() {
		return rating;
	}



	public void setRating(int rating) {
		this.rating = rating;
	}



	public int getImageId() {
		return imageId;
	}



	public void setImageId(int imageId) {
		this.imageId = imageId;
	}



	@Column(name = "name", nullable = false)
    private String name;
    
    @Column(name = "price", nullable = false)
    private double price;
    
    @Column(name = "subcategory_id", nullable = false)
    private int subcategoryId;
    
    @Column(name = "brand_id", nullable = false)
    private int brandId;
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "stock_quantity", nullable = false)
    private int stockQuantity;
    
    @Column(name = "rating", nullable = false, columnDefinition = "INT DEFAULT 0")
    private int rating;
    
    @Column(name = "image_id", nullable = false)
    private int imageId;
    
//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "product_id")
//    private List<ConfigDetailMaster> configDetailsList;
//    
//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "product_id")
//    private List<InvoiceDetailsMaster> invoiceDetailsList;
//    
//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "product_id")
//    private List<CartMaster> cartList;
    
    public int getProductId() {
        return productId;
    }

   

	public void setProductId(int id) {
		// TODO Auto-generated method stub
		
	}
}
