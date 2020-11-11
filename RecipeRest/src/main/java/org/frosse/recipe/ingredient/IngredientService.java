package org.frosse.recipe.ingredient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientService {

    @Autowired
    private IngredientRepository ingredientRepository;

    public Ingredient addNew(Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

    public List<Ingredient> getAll() {
        return ingredientRepository.findAll();
    }

    public void deleteIngredient(Integer id) {
        ingredientRepository.deleteById(id);
    }

    public Optional<Ingredient> getById(Integer id) {
        return ingredientRepository.findById(id);
    }
}
