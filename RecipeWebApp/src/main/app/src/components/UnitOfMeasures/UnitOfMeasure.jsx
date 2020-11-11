import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { UPDATE_SUCCESS, UPDATE_ERROR } from "../util/Errors";

const UnitOfMeasure = () => {
    const { id } = useParams();
    const [unitOfMeasure, setUnitOfMeasure] = useState("");
    const [name, setName] = useState("");
    const [abbreviation, setAbbreviation] = useState("");
    const [status, setStatus] = useState("");

    const fetchUnitOfMeasure = () => {
        axios.get("http://localhost:8080/api/v1/unitOfMeasure/" + id).then(res => {
            console.log(res.data);
            setUnitOfMeasure(res.data);
            setName(res.data.name);
            setAbbreviation(res.data.abbreviation);
        }).catch(err => {
          console.log(err);
        })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      let tmp = unitOfMeasure;
      tmp.name = name;
      tmp.abbreviation = abbreviation;
      axios.put("http://localhost:8080/api/v1/unitOfMeasure", tmp)
           .then(res => {
             setUnitOfMeasure(res.data);
             setStatus(UPDATE_SUCCESS);
           }).catch(err => {
             console.error(err);
             setStatus(UPDATE_ERROR);
           })

    }
  useEffect(() => {
    fetchUnitOfMeasure();
  },[]);
   
    return <Container>
             <h1>Unit of measure</h1>
             <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Abbreviation</Form.Label>
            <Form.Control
              type="text"
              value={abbreviation}
              onChange={e => setAbbreviation(e.target.value)}
            />
          </Form.Group>
        </Form>
             {status && <p>{status}</p>}
             <Link to="/unitOfMeasures">
        <Button variant="primary" >
          Back
        </Button></Link>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>

           </Container>
}
export default UnitOfMeasure;
