package org.frosse.recipe.category;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class CategoryTest {

    @Autowired
    private TestEntityManager testEntityManager;

    @Autowired
    private CategoryCRUDRepository categoryCRUDRepository;
    
    @Test
    public void categoryCanBeCreated()  {
	Category category = new Category("Alkupalat");
	testEntityManager.persist(category);
	testEntityManager.flush();
	Optional<Category> found = categoryCRUDRepository.findByName(category.getName());
	assertEquals(category.getName(), found.get().getName());
	assertEquals(1, 1);
    }
}
