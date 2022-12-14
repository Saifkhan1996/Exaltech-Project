import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormThree() {
  const [primeadd, setPrimeadd] = useState("");
  const [secadd, setSecadd] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const formThreeDispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    formThreeDispatch({
      type: "FORM_THREE_DATA",
      payload: { primeadd, secadd, state, city },
    });
    navigate("/summary");
  };

  return (
    <Form>
      <Form.Label>Primary Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter primary add"
        onChange={(e) => setPrimeadd(e.target.value)}
      />
      <Form.Label>Permanent Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter permanant add"
        onChange={(e) => setSecadd(e.target.value)}
      />
      <Form.Label>State</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter State"
        onChange={(e) => setState(e.target.value)}
      />
      <Form.Label>City</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
      />

      <Button variant="primary" type="submit" onClick={handleClick}>
        Next
      </Button>
    </Form>
  );
}

export default FormThree;
