import React, { useState, useEffect } from "react";
import axios from "axios";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import AddComponent from "./AddComponent";
import AddInstruction from "./AddInstruction";
import ComponentList from "./ComponentList";
import InstructionList from "./InstructionList";

const AddRecipe = ({
  addComponent,
  addInstruction,
  addRecipe,
  components,
  instructions,
  handleClose,
  show,
  clearComponents,
  clearInstructions
}) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const onClickAddRecipe = () => {
    if (
      name === "" ||
      desc === "" ||
      instructions.length === 0 ||
      category === "" ||
      components.length === 0
    ) {
      setError("Please fill form correctly");
    } else {
      const recipe = {
        name,
        description: desc,
        instructions,
        category: categories.find(c => c.name === category),
        components
      };
      addRecipe(recipe);
      clearForms();
      handleClose();
    }
  };

  const onClickHandleClose = () => {
    clearForms();
    handleClose();
  };

  const clearForms = () => {
    clearComponents();
    clearInstructions();
    setName("");
    setCategory("");
    setDesc("");
    setError("");
  };

  const fetchCategories = () => {
    axios.get("http://localhost:8080/api/v1/category").then(res => {
      setCategories(res.data);
    });
  };

  const categoryOptions = categories.map(category => {
    return (
      <option key={category.id} value={category.name}>
        {category.name}
      </option>
    );
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={onClickAddRecipe}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Recipe name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select category..
                </option>
                {categoryOptions}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows="2"
                placeholder="Description"
                value={desc}
                onChange={e => setDesc(e.target.value)}
              />
            </Form.Group>
          </Form>
          <InstructionList instructions={instructions} />
          <AddInstruction addInstruction={addInstruction} />
          <ComponentList components={components} />
          <AddComponent addComponent={addComponent} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClickHandleClose}>
            Close
          </Button>
          <Button onClick={onClickAddRecipe}>Add new Recipe</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddRecipe;
