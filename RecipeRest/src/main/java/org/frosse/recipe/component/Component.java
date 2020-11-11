package org.frosse.recipe.component;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.frosse.recipe.ingredient.Ingredient;
import org.frosse.recipe.unitofmeasure.UnitOfMeasure;

import javax.persistence.*;

@Entity
public class Component {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("id")
    private Integer Id;

    @JsonProperty("amount")
    private float amount;

    @ManyToOne
    @JsonProperty("ingredient")
    private Ingredient ingredient;

    @ManyToOne
    @JsonProperty("unitOfMeasure")
    private UnitOfMeasure unitOfMeasure;

    public Component() {}

    public Component(Ingredient ingredient, UnitOfMeasure unitOfMeasure, int amount) {
        this.ingredient = ingredient;
        this.amount = amount;
        this.unitOfMeasure = unitOfMeasure;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }
}
