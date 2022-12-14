import React from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const Courses = () => {
  const CourseSelector = useSelector((state) => state.CourseReducer);
  return (
    <div>
      {CourseSelector.map((item, index) => {
        return (
          <Card
            style={{ width: "18rem", height: "18rem", display: "inline-block" }}
            key={index}
          >
            <Card.Img variant="top" src={item.courseImage} />
            <Card.Body>
              <Card.Title>{item.courseTitle}</Card.Title>
              <Card.Text>{item.courseDesc}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Courses;
