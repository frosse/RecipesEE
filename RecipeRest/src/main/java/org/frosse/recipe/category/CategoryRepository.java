package org.frosse.recipe.category;

import java.util.List;
import java.util.Optional;

public interface CategoryRepository {
    Optional<Category> findByName(String name);
    List<Category> findAll();
    Category save(Category category);
    Optional<Category> findById(Integer id);
    void deleteById(Integer id);
}
