import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const List = ({ items, deleteFunction, link }) => {
  return (
    <ListGroup variant="flush">
      {items.map(item => {
        return (
          <ListGroupItem key={item.id}>
            <Link to={link + "/" + item.id}>
            {item.name}
          </Link>
            <Button
              size="sm"
              className="float-right"
              onClick={() => deleteFunction(item.id)}
            >
              Delete
            </Button>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};
export default List;
