package org.frosse.recipe.ingredient;

import org.frosse.recipe.unitofmeasure.UnitOfMeasure;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class IngredientTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private IngredientRepository ingredientRepository;

    @Test
    public void simpleIngredientTest() {
        UnitOfMeasure uom = new UnitOfMeasure("Kilogram", "kg");
        entityManager.persist(uom);
        Ingredient ingredient = new Ingredient("JAUHOJA", uom);
        entityManager.persist(ingredient);
        entityManager.flush();
        Ingredient found = ingredientRepository.findByName(ingredient.getName());
        assertEquals(ingredient.getName(), found.getName());
    }
    
    @Test
    public void FindAllRecipes() {
        UnitOfMeasure uom = new UnitOfMeasure("Kilogram", "kg");
        entityManager.persist(uom);
        Ingredient ingredient = new Ingredient("JAUHOJA", uom);
        entityManager.persist(ingredient);
        entityManager.flush();
        Ingredient found = ingredientRepository.findByName(ingredient.getName());
        assertEquals(ingredient.getName(), found.getName());
    }
}
