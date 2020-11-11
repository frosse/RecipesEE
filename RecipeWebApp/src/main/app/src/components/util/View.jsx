import React from "react";

import Button from "react-bootstrap/Button";

import List from "./List";

const View = ({ children, deleteFunction, handleShow, items, link}) => {
  return (
    <>
      <List items={items} deleteFunction={deleteFunction} link={link} />
      {children}
      <Button className="mt-2" onClick={handleShow}>
        Add new
      </Button>
    </>
  );
};
export default View;
