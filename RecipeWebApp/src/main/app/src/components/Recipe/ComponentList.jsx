import React from "react";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ComponentList = ({ components }) => {
  return (
    <ListGroup variant="flush">
      {components.map(component => {
        return (
          <ListGroupItem key={component.id}>
            <Row>
              <Col lg={4} xs={4}>
                {component.amount}
                {component.unitOfMeasure.abbreviation}
              </Col>
              <Col lg={4} xs={4}>
                {component.ingredient.name}
              </Col>
              <Col lg={4} xs={4}>
                <Button size="sm" className="float-right">
                  Delete
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default ComponentList;
