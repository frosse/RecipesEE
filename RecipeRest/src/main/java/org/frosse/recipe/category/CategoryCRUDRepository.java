package org.frosse.recipe.category;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("CRUD")
public interface CategoryCRUDRepository extends CrudRepository<Category, Integer>, CategoryRepository {
    public Optional<Category> findByName(String name);
    public List<Category> findAll();

}
