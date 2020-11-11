import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddIngredient = ({ addIngredient, handleClose, show }) => {
  const [error, setError] = useState("");
  const [ingredient, setIngredient] = useState("");

  const onClickAddIngredient = () => {
    if (ingredient === "") {
      setError("Name cannot be empty");
    } else {
      addIngredient(ingredient);
      setIngredient("");
      setError("");
      handleClose();
    }
  };

  const onClickHandleClose = () => {
    setIngredient("");
    setError("");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new ingredient</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={onClickAddIngredient}>
          <Form.Group controlId="exampleForm.ControlInput0">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={ingredient}
              onChange={e => setIngredient(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClickHandleClose}>
          Close
        </Button>
        <Button onClick={onClickAddIngredient}>Add new Ingredient</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddIngredient;
