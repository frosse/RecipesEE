import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

const InstructionList = ({ instructions }) => {
  return (
    <ListGroup variant="flush">
      {instructions.map(instruction => {
        return (
          <ListGroupItem key={instruction.id}>
            <Row>{instruction.text}</Row>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default InstructionList;
