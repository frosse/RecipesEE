import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";

import AddCategory from "./AddCategory";
import View from "../util/View";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchCategories = () => {
    axios.get("http://localhost:8080/api/v1/category").then(res => {
      setCategories(res.data);
    });
  };

  const addCategory = category => {
    axios
      .post("http://localhost:8080/api/v1/category", {
        name: category
      })
      .then(function (response) {
        fetchCategories();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteCategory = id => {
    axios
      .delete("http://localhost:8080/api/v1/category/" + id)
      .then(function (response) {
        fetchCategories();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container>
      <h1>Categories</h1>
      <View
        deleteFunction={deleteCategory}
        handleShow={handleShow}
        items={categories}
        link={"category"}
      >
        <AddCategory
          addCategory={addCategory}
          handleClose={handleClose}
          show={show}
        />
      </View>
    </Container>
  );
};

export default Categories;
