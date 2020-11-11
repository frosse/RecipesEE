import React from "react";

import Categories from "./components/Category/Categories";
import Category from "./components/Category/Category";
import UnitOfMeasures from "./components/UnitOfMeasures/UnitOfMeasures";
import UnitOfMeasure from "./components/UnitOfMeasures/UnitOfMeasure";
import Ingredients from "./components/Ingredient/Ingredients";
import Ingredient from "./components/Ingredient/Ingredient";
import Components from "./components/Recipe/Recipes";
import Recipe from "./components/Recipe/Recipe";
import Home from "./components/Home/Home";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          activeKey="/categories"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">RecipeApp</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/recipes">Recipes</Nav.Link>
              <Nav.Link href="/categories">Categories</Nav.Link>
              <Nav.Link href="/ingredients">Ingredients</Nav.Link>
              <Nav.Link href="/unitofmeasures">Unit Of Measures</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
          <Route path="/ingredients/:id">
            <Ingredient />
          </Route>
          <Route path="/ingredients">
            <Ingredients />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
          <Route path="/recipes">
            <Components />
          </Route>
          <Route path="/unitofmeasures/:id">
            <UnitOfMeasure />
          </Route>
          <Route path="/unitofmeasures">
            <UnitOfMeasures />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
