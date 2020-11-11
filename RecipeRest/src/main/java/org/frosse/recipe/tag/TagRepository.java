package org.frosse.recipe.tag;

import org.springframework.data.repository.CrudRepository;

public interface TagRepository extends CrudRepository<Tag, Integer> {
    public Tag findByName(String name);

}
