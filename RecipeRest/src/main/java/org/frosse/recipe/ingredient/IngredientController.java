package org.frosse.recipe.ingredient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/v1/ingredient")
@RestController
public class IngredientController {

    @Autowired
    private IngredientService ingredientService;

    @PostMapping
    public Ingredient addIngredient(@RequestBody Ingredient ingredient) {
        return ingredientService.addNew(ingredient);
    }

    @GetMapping
    public List<Ingredient> getAll() {
        return ingredientService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Ingredient> getById(@PathVariable("id") Integer id) {
        return ingredientService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteIngredient(@PathVariable("id") Integer id) {
        ingredientService.deleteIngredient(id);
    }

    @PutMapping
    public Ingredient updateIngredient(@RequestBody Ingredient ingredient) {
        return ingredientService.addNew(ingredient);

    }
}
