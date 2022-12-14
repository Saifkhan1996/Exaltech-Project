import React, { useState } from "react";
import "./App.css";
import CustomCarousel from "./Component/ExaltechSoftware/Carousel/CustomCarousel";
import Courses from "./Component/ExaltechSoftware/Courses/Courses";
import Dashboard from "./Component/ExaltechSoftware/Dashboard/Dashboard";
import Footer from "./Component/ExaltechSoftware/Footer";
import Navigation from "./Component/ExaltechSoftware/Navigation/Navigation";

// import { DummyComp } from "./Component/DummyComp";
// import MyComp from "./Component/MyComp";
// import { Navbar } from "./Component/Navbar";
// import Main from "./Component/Main";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* <DummyComp fname={"saif"} lname={"khan"} />
      <MyComp obj={"jhon"} obj1={"snow"} />
      <Navbar />
      <Main /> */}
      <button onClick={() => setShow(!show)}>Dashboard</button>
      {show && <Dashboard />}
      <Navigation />
      <CustomCarousel />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
