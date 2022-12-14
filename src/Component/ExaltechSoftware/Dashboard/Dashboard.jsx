import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [target, setTarget] = useState("");

  const [carImage, setCarImage] = useState("");
  const [carTitle, setCarTitle] = useState("");
  const [carDesc, setCarDesc] = useState("");

  const [courseImage, setCourseImage] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");

  const [footerImage, setFooterImage] = useState("");
  const [footerTitle, setFooterTitle] = useState("");
  const [footerDesc, setFooterDesc] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "ADD_LINK", data: { name, link, target } });
  };
  const handleCarousel = () => {
    dispatch({
      type: "ADD_CAROUSEL",
      data: {
        carouselImage: carImage,
        carouselTitle: carTitle,
        carouselDesc: carDesc,
      },
    });
  };
  const handleCourse = () => {
    dispatch({
      type: "ADD_COURSE",
      data: { courseImage, courseTitle, courseDesc },
    });
  };
  const handleFooter = () => {
    dispatch({
      type: "ADD_FOOTER",
      data: { footerImage, footerTitle, footerDesc },
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Link Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Link Address"
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="Link Target"
        onChange={(e) => setTarget(e.target.value)}
      />
      <button onClick={handleClick} type="submit">
        DispatchLinks
      </button>
      <br />
      <input
        type="text"
        placeholder="Carousel Image"
        onChange={(e) => setCarImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Carousel Title"
        onChange={(e) => setCarTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Carousel Desc"
        onChange={(e) => setCarDesc(e.target.value)}
      />
      <button onClick={handleCarousel}>Dispatch Carousel</button>
      <br />
      <input
        type="text"
        placeholder="Course image"
        onChange={(e) => setCourseImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course title"
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course desc"
        onChange={(e) => setCourseDesc(e.target.value)}
      />
      <button onClick={handleCourse}>Dispatch Course</button>
      <br />
      <input
        type="text"
        placeholder="Footer Image"
        onChange={(e) => setFooterImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Footer Title"
        onChange={(e) => setFooterTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Footer Desc"
        onChange={(e) => setFooterDesc(e.target.value)}
      />
      <button onClick={handleFooter}>Dispatch Footer</button>
    </div>
  );
};

export default Dashboard;
