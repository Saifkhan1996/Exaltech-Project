import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormOne() {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [fullname, setFullname] = useState("");
  const formOneDispatch = useDispatch();
  const navigate = useNavigate();
  const handleDispatchAndRoute = (e) => {
    e.preventDefault();
    formOneDispatch({
      type: "FORM_ONE_DATA",
      payload: { fname, mname, lname, fullname },
    });
    navigate("/FormTwo");
  };

  return (
    <Form>
      <Form.Label>First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Fname"
        onChange={(e) => setFname(e.target.value)}
      />
      <Form.Label>Middle Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Mname"
        onChange={(e) => setMname(e.target.value)}
      />
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Lname"
        onChange={(e) => setLname(e.target.value)}
      />
      <Form.Label>Full Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Fullname"
        onChange={(e) => setFullname(e.target.value)}
      />

      <Button variant="primary" type="submit" onClick={handleDispatchAndRoute}>
        Next
      </Button>
    </Form>
  );
}

export default FormOne;
