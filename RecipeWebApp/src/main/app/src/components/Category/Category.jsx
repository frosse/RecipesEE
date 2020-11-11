import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { UPDATE_SUCCESS, UPDATE_ERROR } from "../util/Errors"
const Category = () => {
    const { id } = useParams();
    const [category, setCategory] = useState({});
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const fetchCategory = () => {
        axios.get("http://localhost:8080/api/v1/category/" + id).then(res => {
            console.log(res.data);
            setCategory(res.data);
            setName(res.data.name);
        });
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let tmp = category;
        tmp.name = name;
        axios.put("http://localhost:8080/api/v1/category", tmp
        ).then(res => {
            fetchCategory();
            setStatus(UPDATE_SUCCESS);
        }).catch(err => {
            console.log(err);
            setStatus(UPDATE_ERROR);
        });
       
    }


    return <Container>
           <h1>Category</h1>
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
             <Link to="/categories">
        <Button variant="primary" >
          Back
        </Button></Link>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
           </Container>
}

export default Category;
