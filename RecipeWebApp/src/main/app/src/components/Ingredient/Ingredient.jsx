import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { UPDATE_SUCCESS, UPDATE_ERROR } from "../util/Errors"

const Ingredient = () => {
    const { id } = useParams();
    const [ingredient, setIngredient] = useState({});
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const fetchIngredient = () => {
        axios.get("http://recipe-rest/api/v1/ingredient/" + id).then(res => {
            console.log(res.data);
            setIngredient(res.data);
            setName(res.data.name);
        }).catch(err => {
            console.error(err);
        });
    };

    useEffect(() => {
        fetchIngredient();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let tmp = ingredient;
        tmp.name = name;
        axios.put("http://recipe-rest/api/v1/ingredient", tmp
        ).then(res => {
            setIngredient(res.data);
            setStatus(UPDATE_SUCCESS)
        }).catch(err => {
            setStatus(UPDATE_ERROR);
            console.error(err);
        });

    }


    return <Container>
           <h1>Ingredient</h1>
             <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
        </Form>
             {status && <p>{status}</p>}
             <Link to="/ingredients">
        <Button variant="primary" >
          Back
        </Button></Link>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
           </Container>
}
export default Ingredient;
