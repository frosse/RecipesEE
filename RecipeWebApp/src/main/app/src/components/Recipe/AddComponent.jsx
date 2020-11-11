import React, { useState, useEffect } from "react";
import axios from "axios";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddComponent = ({ addComponent }) => {
  const onClickAddComponent = event => {
    if (amount === "" || ingredient === "" || unitOfMeasure === "") {
      setError("Please fill form correctly");
    } else {
      const component = {
        amount,
        ingredient: ingredients.find(i => i.name === ingredient),
        unitOfMeasure: unitOfMeasures.find(uom => uom.name === unitOfMeasure)
      };
      addComponent(component);
      event.preventDefault();
      setUnitOfMeasure("");
      setIngredient("");
      setAmount("");
      setError("");
    }
  };

  const fetchUnitOfMeasures = () => {
    axios.get("http://localhost:8080/api/v1/unitOfMeasure").then(res => {
      setUnitOfMeasures(res.data);
    });
  };

  const fetchIngredients = () => {
    axios.get("http://localhost:8080/api/v1/ingredient").then(res => {
      setIngredients(res.data);
    });
  };

  const [amount, setAmount] = useState("");
  const [unitOfMeasures, setUnitOfMeasures] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [unitOfMeasure, setUnitOfMeasure] = useState("");
  const [error, setError] = useState("");

  const measures = unitOfMeasures.map(unit => {
    return (
      <option key={unit.id} value={unit.name}>
        {unit.name}
      </option>
    );
  });

  const ingredientOptions = ingredients.map(i => {
    return (
      <option key={i.id} value={i.name}>
        {i.name}
      </option>
    );
  });

  useEffect(() => {
    fetchUnitOfMeasures();
    fetchIngredients();
  }, []);

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={onClickAddComponent}>
        <Row>
          <Col lg="4" className="mt-2">
            <Form.Control
              as="select"
              value={ingredient}
              onChange={e => setIngredient(e.target.value)}
            >
              <option value="" disabled>
                Select ingredient...
              </option>
              {ingredientOptions}
            </Form.Control>
          </Col>
          <Col lg="4" className="mt-2">
            <Form.Control
              as="select"
              value={unitOfMeasure}
              onChange={e => setUnitOfMeasure(e.target.value)}
            >
              <option value="" disabled>
                Select unit of measure...
              </option>
              {measures}
            </Form.Control>
          </Col>
          <Col lg="2" className="mt-2">
            <Form.Control
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </Col>
          <Col lg="2" className="mt-2">
            <Button
              variant="primary"
              className="btn btn-blue float-right"
              style={{ margin: "2px" }}
              onClick={onClickAddComponent}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default AddComponent;
