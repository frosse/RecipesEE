package org.frosse.recipe.ingredient;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IngredientRepository extends CrudRepository<Ingredient, Integer> {
    public Ingredient findByName(String name);
    public List<Ingredient> findAll();
}
