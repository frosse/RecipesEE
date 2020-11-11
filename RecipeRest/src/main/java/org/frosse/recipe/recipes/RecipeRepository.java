package org.frosse.recipe.recipes;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Integer> {
    Recipe findByName(String name);
    List<Recipe> findAll();
    Optional<Recipe> findById(Integer id);
    void deleteById(Integer id);
}
