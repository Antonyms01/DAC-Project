package com.example.demo.entities;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "subcategory")
public class Subcategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subcategoryid")
    private int subcategoryId;

    @Column(name = "categoryid")
    private int categoryId;

    @Column(name = "subcategoryname")
    private String subcategoryName;

    @Column(name = "imageid")
    private int imageId;

    // Getters and Setters
}
