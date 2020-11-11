import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import AddInstruction from "./AddInstruction";
import AddComponent from "./AddComponent";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [desc, setDesc] = useState("")
  const [categories, setCategories] = useState([])
  const [instructions, setInstructions] = useState([]); 
  const [ingredient, setIngredient] = useState("");
  const [unitOfMeasure, setUnitOfMeasure] = useState("");
  const [unitOfMeasures, setUnitOfMeasures] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [components, setComponents] = useState([]);


  const [amount, setAmount] = useState("");

  const fetchRecipe = () => {
    fetchCategories();
    axios.get("http://localhost:8080/api/v1/recipe/" + id).then(res => {
      setRecipe(res.data);
      setName(res.data.name);
      setCategory(res.data.category);
      setDesc(res.data.description)
      setInstructions(res.data.instructions);
      setComponents(res.data.components);
    });
  };

  useEffect(() => {
    fetchRecipe();
    fetchIngredients();
    fetchUnitOfMeasures();
  }, []);

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

  const updateRecipe = () => {
    const payload = {
      id: recipe.id,
      name,
      description: desc,
      instructions,
      category,
      components
    }
    axios
      .put("http://localhost:8080/api/v1/recipe", payload)
      .then(function (response) {
        setRecipe(response.data);
        setEdit(false);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


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

  const editIngredientName = (id, value) => {
    const tmp = components.map(c => {
      if (c.id === id) {
        c.ingredient.name = value;
      }
      return c;
      });
    setComponents(tmp)
  };

  const editUnitOfMeasure = (id, value) => {
    const tmp = components.map(c => {
      if (c.id === id) {
        c.unitOfMeasure.name = value;
      }
      return c;
      });
    setComponents(tmp)
  };

  const editAmount = (id, value) => {
    const tmp = components.map(c => {
      if (c.id === id) {
        c.amount = value;
      }
      return c;
      });
    setComponents(tmp)
  };

  const componentList = () => {
    if (edit) {
      return components.map(component => {
        return (
          <Row>
          <Col lg="4" className="mt-2">
          <Form.Control
            as="select"
            value={component.ingredient.name}
            onChange={e => editIngredientName(component.id, e.target.value)}
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
            value={component.unitOfMeasure.name}
            onChange={e => editUnitOfMeasure(component.id, e.target.value)}
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
            value={component.amount}
            onChange={e => editAmount(component.id, e.target.value)}
          />
        </Col>
        </Row>
        );
      })

    }
    return recipe.components.map(component => {
      return (
        <li key={component.id}>
          {component.amount}
          {component.unitOfMeasure.abbreviation} {component.ingredient.name}
        </li>
      );
    });
  };
  
  const addInstruction = (text) => {
    const inst = { text};
    setInstructions([text, ...instructions])
  }

  const instructionsList = () => {
    if (edit) {
      return instructions.map(instruction => {
        return (
        <Form.Group>
          <Form.Control type="text" value={instruction.text}/>
          <Button>Delete</Button>
        </Form.Group>
        )
      })
        
    }
    return instructions.map(instruction => {
      return <li key={instruction.id}>{instruction.text}</li>;
    });
  };

  const addComponent = (component) => {
    setComponents([...components,component])

  }

  if (edit) {
    return <Container>
      <Form onSubmit={() => console.log("")}>
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
      {instructionsList()}
      <AddInstruction addInstruction={addInstruction}/>
      {componentList()}
      <AddComponent addComponent={addComponent}/>
      <Button onClick={updateRecipe}>save</Button>
    </Container>;
  }
  return (
    <Container>
      <h1>{recipe.name}</h1>
      <h4>{recipe.category && recipe.category.name}</h4>
      <p>{recipe.description}</p>
      <ul>{recipe.components && componentList()}</ul>
      <ol>{recipe.instructions && instructionsList()}</ol>
      <Button onClick={() => setEdit(true)}>Edit</Button>
    </Container>
  );
};

export default Recipe;
