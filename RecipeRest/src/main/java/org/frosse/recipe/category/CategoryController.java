package org.frosse.recipe.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/v1/category")
@RestController
public class CategoryController {


    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public Category addCategory(@RequestBody Category category) {
        return categoryService.addCategory(category);
    }

    @GetMapping
    public List<Category> getAll() {
	return categoryService.getAllCategories();
    }

    @GetMapping(path = "{id}")
    public Category getCategoryById(@PathVariable("id")Integer id) {
	return categoryService.getCategoryById(id)
	    .orElse(null);
    }
    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable("id") Integer id) {
        categoryService.deleteCategory(id);
    }

    @PutMapping()
    public Category updateCategory(@RequestBody Category category) {
        return categoryService.addCategory(category);
    }
}
