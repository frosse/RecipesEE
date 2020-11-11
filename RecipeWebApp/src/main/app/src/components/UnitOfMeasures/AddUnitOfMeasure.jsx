import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddUnitOfMeasure = ({ addUnitOfMeasure, handleClose, show }) => {
  const [name, setName] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [error, setError] = useState("");

  const onClickAddMeasure = event => {
    if (name === "" && abbreviation === "") {
      setError("Cant be empty");
    } else if (name === "") {
      setError("Name cannot be empty");
    } else if (abbreviation === "") {
      setError("Abbreviation cannot be empty");
    } else {
      addUnitOfMeasure(name, abbreviation);
      setName("");
      setAbbreviation("");
      setError("");
      event.preventDefault();
      handleClose();
    }
  };

  const onClickHandleClose = () => {
    setName("");
    setAbbreviation("");
    setError("");
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new unit of measure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant={"danger"}>{error}</Alert>}
          <Form onSubmit={onClickAddMeasure}>
            <Form.Group controlId="exampleForm.ControlInput0">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Form.Label>Abbreviation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter abbreviation"
                value={abbreviation}
                onChange={e => setAbbreviation(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClickHandleClose}>
            Close
          </Button>
          <Button onClick={onClickAddMeasure}>Add new unit of measure</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddUnitOfMeasure;
