package org.frosse.recipe.instructions;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
public class Instruction {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @JsonProperty("id")
  private Integer id;

  @JsonProperty("order")
  private Integer orderNumber;

  @JsonProperty("text")
  @Column(columnDefinition="text")
  private String text;

  public Instruction() {
  }

  public Instruction(Integer orderNumber, String text) {
    this.orderNumber = orderNumber;
    this.text = text;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getOrderNumber() {
    return orderNumber;
  }

  public void setOrderNumber(Integer orderNumber) {
    this.orderNumber = orderNumber;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

}
