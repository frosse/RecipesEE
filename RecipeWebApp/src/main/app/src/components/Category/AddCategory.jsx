import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddCategory = ({ addCategory, handleClose, show }) => {
  const onClickAddCategory = event => {
    if (category === "") {
      setError("Name cannot be empty");
    } else {
      addCategory(category);
      setCategory("");
      setError("");
      event.preventDefault();
      handleClose();
    }
  };
  const onClickHandlClose = () => {
    setCategory("");
    setError("");
    handleClose();
  };

  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={onClickAddCategory}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClickHandlClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClickAddCategory}>
          Add category
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddCategory;
