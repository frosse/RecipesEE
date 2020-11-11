package org.frosse.recipe.category;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository("Fake")
public class FakeCategoryRepository implements CategoryRepository{
    private List<Category> categories;

    public FakeCategoryRepository() {
        categories = new ArrayList<Category>();
        Category category = new Category();
        category.setId(1);
        category.setName("Paaruoka");
        categories.add(category);
    }

    @Override
    public Optional<Category> findByName(String name) {
        return Optional.empty();
    }

    public List<Category> findAll() {
        return categories;
    }

    @Override
    public Category save(Category category) {
        categories.add(category);
        return category;
    }

    @Override
    public Optional<Category> findById(Integer id) {
//        categories.stream().findAny( category -> {
//
//        })
        return Optional.empty();
    }

    @Override
    public void deleteById(Integer id) {

    }
}
