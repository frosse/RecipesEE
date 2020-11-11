package org.frosse.recipe.tag;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.junit.Assert.assertEquals;

@DataJpaTest
class TagTest {

    @Autowired
    private TestEntityManager entityManager;
    
    @Autowired
    private TagRepository tagRepository;

    @Test
    public void tagIsCreatable() {
	Tag tag1 = new Tag("testattava Tagi");
	entityManager.persist(tag1);
	entityManager.flush();
	Tag found = tagRepository.findByName(tag1.getName());
	assertEquals(tag1.getName(), found.getName());
    }
}
