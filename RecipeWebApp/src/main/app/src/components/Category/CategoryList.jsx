import React from "react";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";

const CategoryList = ({ categories, deleteCategory }) => {
  return (
    <ListGroup variant="flush">
      {categories.map(category => {
        return (
          <ListGroupItem key={category.id}>
            {category.name}
            <Button
              size="sm"
              className="float-right"
              onClick={() => deleteCategory(category.id)}
            >
              Delete
            </Button>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default CategoryList;
