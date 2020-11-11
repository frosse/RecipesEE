import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import AddRecipe from "./AddRecipe";
import RecipeList from "./RecipeList";

const Recipes = () => {
  const [components, setComponents] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addComponent = component => {
    setComponents([...components, component]);
    console.log(components);
  };

  const clearComponents = () => {
    setComponents([]);
  };

  const addInstruction = instruction => {
    instruction.order = instructions.length + 1;
    setInstructions([...instructions, instruction]);
    console.log(instructions);
  };

  const clearInstructions = () => {
    setInstructions([]);
  };

  const fetchRecipes = () => {
    axios.get("http://recipe-rest/api/v1/recipe").then(res => {
      setRecipes(res.data);
    });
  };

  const addRecipe = recipe => {
    axios
      .post("http://localhost:8080/api/v1/recipe", recipe)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteRecipe = id => {
    axios
      .delete("http://localhost:8080/api/v1/recipe/" + id)
      .then(function (response) {
        fetchRecipes();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={10} xs={6}>
          <h1>Recipes</h1>
        </Col>
        <Col sm={2} xs={6}>
          <Button className="float-right" onClick={handleShow}>
            Add Recipe
          </Button>
        </Col>
      </Row>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <AddRecipe
        addComponent={addComponent}
        addInstruction={addInstruction}
        addRecipe={addRecipe}
        components={components}
        instructions={instructions}
        handleClose={handleClose}
        show={show}
        clearComponents={clearComponents}
        clearInstructions={clearInstructions}
      />
    </Container>
  );
};

export default Recipes;
