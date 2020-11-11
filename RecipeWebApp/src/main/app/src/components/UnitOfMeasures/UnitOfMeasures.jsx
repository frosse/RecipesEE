import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import UnitOfMeasureList from "./UnitOfMeasureList";
import AddUnitOfMeasure from "./AddUnitOfMeasure";

const UnitOfMeasures = () => {
  const [unitOfMeasures, setUnitOfMeasures] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchUnitOfMeasures = () => {
    axios.get("http://localhost:8080/api/v1/unitOfMeasure").then(res => {
      setUnitOfMeasures(res.data);
    });
  };

  const addUnitOfMeasure = (name, abbreviation) => {
    axios
      .post("http://localhost:8080/api/v1/unitOfMeasure", {
        name: name,
        abbreviation: abbreviation
      })
      .then(function (response) {
        fetchUnitOfMeasures();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteUnitOfMeasure = id => {
    axios
      .delete("http://localhost:8080/api/v1/unitOfMeasure/" + id)
      .then(function (response) {
        fetchUnitOfMeasures();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUnitOfMeasures();
  }, []);

  return (
    <Container>
      <h1>Unit of Measures</h1>
      <UnitOfMeasureList
        unitOfMeasures={unitOfMeasures}
        deleteFunction={deleteUnitOfMeasure}
      />
      <AddUnitOfMeasure
        addUnitOfMeasure={addUnitOfMeasure}
        handleClose={handleClose}
        show={show}
      />
      <Button className="mt-2" onClick={handleShow}>
        Add new
      </Button>
    </Container>
  );
};

export default UnitOfMeasures;
