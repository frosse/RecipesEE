import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";

import View from "../util/View";
import AddIngredient from "./AddIngredient";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchIngredients = () => {
    console.log("FEEEEETTTTTCHHH")
    axios.get("http://recipe-rest/api/v1/ingredient").then((res) => {
      setIngredients(res.data);
    });
  };

  const addIngredient = (ingredient) => {
    axios
      .post("http://recipe-rest/api/v1/ingredient", {
        name: ingredient,
      })
      .then(function (response) {
        fetchIngredients();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteIngredient = (id) => {
    axios
      .delete("http://recipe-rest/api/v1/ingredient/" + id)
      .then(function (response) {
        fetchIngredients();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <Container>
      <h1 className="ml-3">Ingredients</h1>
      <View
        deleteFunction={deleteIngredient}
        handleShow={handleShow}
        items={ingredients}
        link={"ingredients"}
      >
        <AddIngredient
          addIngredient={addIngredient}
          handleClose={handleClose}
          show={show}
        />
      </View>
    </Container>
  );
};

export default Ingredients;
