import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddInstruction = ({ addInstruction }) => {
  const onClickAddInstruction = event => {
    if (text === "") {
      setError("Please fill form correctly");
    } else {
      const instruction = {
        text
      };
      addInstruction(instruction);
      event.preventDefault();
      setText("");
      setError("");
    }
  };

  const [text, setText] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={onClickAddInstruction}>
        <Row>
          <Col lg="10" className="mt-2">
            <Form.Control
              type="text"
              placeholder="Enter instruction"
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </Col>
          <Col lg="2" className="mt-2">
            <Button
              variant="primary"
              className="btn btn-blue float-right"
              style={{ margin: "2px" }}
              onClick={onClickAddInstruction}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default AddInstruction;
