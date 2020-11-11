package org.frosse.recipe.ingredient;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.frosse.recipe.unitofmeasure.UnitOfMeasure;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;

    @JsonProperty("name")
    @NotNull
    private String name;

    public Ingredient() {}

    public Ingredient(String name, UnitOfMeasure unitOfMeasure) {
      this.name = name;
    }

    public Integer getId() {
	    return Id;
    }

    public void setId(Integer id) {
	    Id = id;
    }

    public String getName() {
	    return name;
    }

    public void setName(String name) {
	    this.name = name;
    }
}
