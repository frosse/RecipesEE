package org.frosse.recipe.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {


    @Autowired
    @Qualifier("CRUD")
    private CategoryRepository categoryRepository;


    public Category addCategory(Category category){
        return categoryRepository.save(category);

    }

    public List<Category> getAllCategories() {
	    return categoryRepository.findAll();
	
    }


    public Optional<Category> getCategoryById(Integer id) {
        return categoryRepository.findById(id);
    }

    public Optional<Category> findByName(String name) {
        return categoryRepository.findByName(name);
    }

    public void deleteCategory(Integer id) {
        categoryRepository.deleteById(id);
    }
}
