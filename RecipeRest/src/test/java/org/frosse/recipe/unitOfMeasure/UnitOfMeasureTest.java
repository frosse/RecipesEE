package org.frosse.recipe.unitOfMeasure;

import org.frosse.recipe.unitofmeasure.UnitOfMeasure;
import org.frosse.recipe.unitofmeasure.UnitOfMeasureRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;


@DataJpaTest
public class UnitOfMeasureTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UnitOfMeasureRepository unitOfMeasureRepository;

    @Test
    public void simpleIngredientTest() {
        UnitOfMeasure uom = new UnitOfMeasure("Kilogram", "kg");
        entityManager.persist(uom);
        entityManager.flush();
        UnitOfMeasure found = unitOfMeasureRepository.findByName(uom.getName());
        Assert.assertEquals(uom.getName(), found.getName());
    }

    @Test
    public void FindAllUnits() {
        UnitOfMeasure uom = new UnitOfMeasure("Kilogram", "kg");
        entityManager.persist(uom);
        entityManager.flush();
        UnitOfMeasure found = unitOfMeasureRepository.findByName(uom.getName());
        Assert.assertEquals(uom.getName(), found.getName());
    }
}
