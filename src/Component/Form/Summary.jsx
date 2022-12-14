import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const selector = useSelector((state) => state);
  const navigate = useNavigate();
  const handleClick = () => {
    // console.log(selector.FormOneReducer[0].fname);
    // e.preventDefault();
    navigate("/");
  };
  return (
    <div>
      <h1>Summary</h1>
      {selector.FormOneReducer.map((item) => {
        return (
          <div>
            <h5>{item.fname}</h5>
            <h5>{item.mname}</h5>
            <h5>{item.lname}</h5>
            <h5>{item.fullname}</h5>
          </div>
        );
      })}
      {selector.FormTwoReducer.map((item) => {
        return (
          <div>
            <h5>{item.height}</h5>
            <h5>{item.weight}</h5>
            <h5>{item.chest}</h5>
            <h5>{item.age}</h5>
          </div>
        );
      })}
      {selector.FormThreeReducer.map((item) => {
        return (
          <div>
            <h5>{item.primeadd}</h5>
            <h5>{item.secadd}</h5>
            <h5>{item.state}</h5>
            <h5>{item.city}</h5>
          </div>
        );
      })}
      <button onClick={handleClick}>Go To FormOne</button>
    </div>
  );
};

export default Summary;
