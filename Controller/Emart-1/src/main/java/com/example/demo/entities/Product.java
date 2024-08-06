package com.example.demo.entities;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productid")
    private int productId;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private double price;
    
    @Column(name = "subcategoryid")
    private int subcategoryId;

    @Column(name = "brandname")
    private int brandName;

    @Column(name = "shortdesc")
    private String shortdesc;
    
    @Column(name = "longdesc")
    private String longdesc;

    @Column(name = "stockquantity")
    private int stockQuantity;

    @Column(name = "rating")
    private int rating;

    @Column(name = "imagepath")
    private String imagepath;

    

    public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

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

	public int getBrandName() {
		return brandName;
	}

	public void setBrandName(int brandName) {
		this.brandName = brandName;
	}

	

	public String getShortdesc() {
		return shortdesc;
	}

	public void setShortdesc(String shortdesc) {
		this.shortdesc = shortdesc;
	}

	public String getLongdesc() {
		return longdesc;
	}

	public void setLongdesc(String longdesc) {
		this.longdesc = longdesc;
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

	public String getImagepath() {
		return imagepath;
	}

	public void setImagepath(String imagepath) {
		this.imagepath = imagepath;
	}
  
}
