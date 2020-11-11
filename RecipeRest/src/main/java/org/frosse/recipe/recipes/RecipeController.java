package org.frosse.recipe.recipes;

import org.frosse.recipe.category.CategoryService;
import org.frosse.recipe.component.Component;
import org.frosse.recipe.component.ComponentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/v1/recipe")
@RestController
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ComponentService componentService;

    @PostMapping
    public Recipe addRecipe(@RequestBody Recipe recipe) {
        return recipeService.addRecipe(recipe);
    }

    @GetMapping
    public List<Recipe> getAll() {
        return recipeService.getAllCategories();
    }

    @GetMapping("{id}")
    public Recipe getRecipeById(@PathVariable("id")Integer id) {
        return recipeService.getRecipeById(id)
                .orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable("id") Integer id) {
        recipeService.deleteRecipe(id);
    }

    @PutMapping
    public Recipe updateRecipe(@RequestBody Recipe recipe) {
        for (Component c :recipe.getComponents()) {
            componentService.addNew(c);
        }
        return recipeService.addRecipe(recipe);
    }

}
