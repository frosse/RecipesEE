package org.frosse.recipe.tag;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;

    private String name;

    public Tag(String name) {
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
