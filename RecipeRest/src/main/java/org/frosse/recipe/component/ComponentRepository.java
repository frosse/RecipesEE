package org.frosse.recipe.component;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ComponentRepository extends CrudRepository<Component, Integer> {
    public List<Component> findAll();
}
