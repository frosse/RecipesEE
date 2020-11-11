package org.frosse.recipe.unitofmeasure;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UnitOfMeasureRepository extends CrudRepository<UnitOfMeasure, Integer> {
    public UnitOfMeasure findByName(String name);
    public List<UnitOfMeasure> findAll();
}
