import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const UnitOfMeasuresList = ({ unitOfMeasures, deleteFunction }) => {
  return (
    <ListGroup variant="flush">
      {unitOfMeasures.map(unit => {
        return (
          <ListGroupItem key={unit.id}>
            <Link to={"/unitofmeasures/" + unit.id}>
            {unit.name} ({unit.abbreviation})
            </Link>
            <Button
              size="sm"
              className="float-right"
              onClick={() => deleteFunction(unit.id)}
            >
              Delete
            </Button>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default UnitOfMeasuresList;
