import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";


const IngredientList = ({ ingredients, deleteIngredient }) => {
  return (
    <ListGroup>
      {ingredients.map(ingredient => {
        return (
          <ListGroupItem key={ingredient.id}>
            {ingredient.name}
            <Button
              size="sm"
              className="float-right"
              onClick={() => deleteIngredient(ingredient.id)}
            >
              Delete
            </Button>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default IngredientList;
