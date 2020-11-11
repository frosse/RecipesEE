package org.frosse.recipe.recipes;

import org.frosse.recipe.category.Category;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class RecipeTest
{
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private RecipeRepository recipeRepository;

    private Recipe r1;

    @BeforeEach
    public void createRecipeToDatabase() {
	Category category = new Category("Alkupala");
	entityManager.persist(category);
	entityManager.flush();
	r1 = new Recipe("Recipe's name", category);
        entityManager.persist(r1);
        entityManager.flush();
    }

    public void recipeCanBeCreated() {
	Recipe found = recipeRepository.findByName(r1.getName());
	assertEquals(r1.getName(), found.getName());
    }

    public void recipesCategoryIsCorrect() {
        Recipe found = recipeRepository.findByName(r1.getName());
        assertEquals(r1.getCategory(), found.getCategory());
    }
    
}
