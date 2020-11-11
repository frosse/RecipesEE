package org.frosse.recipe.recipes;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.frosse.recipe.category.Category;
import org.frosse.recipe.component.Component;
import org.frosse.recipe.instructions.Instruction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;


@Entity
public class Recipe {

    @Id
    @JsonProperty("id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @JsonProperty("name")
    @Column(unique = true)
    @NotNull
    private String name;

    @JsonProperty("description")
    @NotNull
    @Column(columnDefinition="text")
    private String description;

    @JsonProperty("instructions")
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "recipe_id")
    @NotNull
    private List<Instruction> instructions;

    @JsonProperty("category")
    @ManyToOne
    @NotNull
    private Category category;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "recipe_id")
    @JsonProperty("components")
    @NotNull
    private List<Component> components;

    public Recipe() {
    }

    public Recipe(String name, Category category) {
        this.name = name;
        this.category = category;
    }

    public String getName() {
	    return name;
    }

    public void setName(String name) {
	    this.name = name;
    }

    public Integer getId() {
	    return id;
    }

    public void setId(Integer id) {
	    this.id = id;
    }

    public Category getCategory() {
	    return category;
    }

    public void setCategory(Category category) {
	    this.category = category;
    }

    public List<Component> getComponents() {
        return components;
    }

    public void setComponents(List<Component> components) {
        this.components = components;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Instruction> getInstructions() {
        return instructions;
    }

    public void setInstructions(List<Instruction> instructions) {
        this.instructions = instructions;
    }
}
