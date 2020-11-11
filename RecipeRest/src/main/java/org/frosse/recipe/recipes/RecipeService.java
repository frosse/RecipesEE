package org.frosse.recipe.recipes;

import org.frosse.recipe.category.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private CategoryService categoryService;

    public Recipe addRecipe(Recipe recipe) {
	    return recipeRepository.save(recipe);

    }

    public List<Recipe> getAllCategories() {
        return recipeRepository.findAll();
    }

    public void deleteRecipe(Integer id) {
        recipeRepository.deleteById(id);

    }

    public Optional<Recipe> getRecipeById(Integer id) {
        return recipeRepository.findById(id);
    }
}
