import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const RecipeList = ({ deleteRecipe, recipes }) => {
  const recipeListComponent = recipes.map(r => {
    return (
      <Col lg={3} style={{ textOverflow: "ellipsis" }} key={r.id}>
        <Card
          style={{
            height: "175px",
            marginTop: "30px",
            textOverflow: "ellipsis"
          }}
        >
          <Card.Body style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
            <Card.Title>
              <Link to={"/recipes/" + r.id}>{r.name}</Link>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {r.category.name}
            </Card.Subtitle>
            <Card.Text>{r.description}</Card.Text>
            <Button
              className="button-bottom"
              size="sm"
              onClick={() => deleteRecipe(r.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return <Row>{recipeListComponent}</Row>;
};
export default RecipeList;
