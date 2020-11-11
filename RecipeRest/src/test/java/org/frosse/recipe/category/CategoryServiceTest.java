package org.frosse.recipe.category;

import org.junit.Before;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


public class CategoryServiceTest {

    @Autowired
    private CategoryService categoryService;

    @MockBean
    private CategoryCRUDRepository categoryCRUDRepository;

    @Before
    public void setup() {
        Category category = new Category("Makeat");
        List<Category> listOfCategories = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            listOfCategories.add(category);
        }
        Mockito.when(categoryCRUDRepository.
		     findByName(category.getName())).thenReturn(Optional.of(category));
        Mockito.when(categoryCRUDRepository.findAll()).thenReturn(listOfCategories);
    }

}
