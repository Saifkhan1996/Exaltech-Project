import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormTwo() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [chest, setChest] = useState("");
  const [age, setAge] = useState("");
  const formTwoDispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    formTwoDispatch({
      type: "FORM_TWO_DATA",
      payload: { height, weight, chest, age },
    });
    navigate("/FormThree");
  };

  return (
    <Form>
      <Form.Label>Height:cm</Form.Label>
      <Form.Control
        type="number"
        placeholder="Enter Height"
        onChange={(e) => setHeight(e.target.value)}
      />
      <Form.Label>weight:kg Name</Form.Label>
      <Form.Control
        type="number"
        placeholder="Enter Weight"
        onChange={(e) => setWeight(e.target.value)}
      />
      <Form.Label>Chest</Form.Label>
      <Form.Control
        type="number"
        placeholder="Enter Chest"
        onChange={(e) => setChest(e.target.value)}
      />
      <Form.Label>Age</Form.Label>
      <Form.Control
        type="number"
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />

      <Button variant="primary" type="submit" onClick={handleClick}>
        Next
      </Button>
    </Form>
  );
}

export default FormTwo;
