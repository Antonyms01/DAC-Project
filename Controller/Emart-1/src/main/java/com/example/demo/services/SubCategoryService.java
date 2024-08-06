package com.example.demo.services;

import com.example.demo.entities.Subcategory;
import com.example.demo.repositories.SubcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubCategoryService {

    @Autowired
    private SubcategoryRepository subcategoryRepository;

    public List<Subcategory> getSubCategoriesByCategoryid(int categoryid) {
        return subcategoryRepository.findByCategoryid(categoryid);
    }
}
