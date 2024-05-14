import React from "react";
import img1 from "../Images/makeup1.png";
import img2 from "../Images/makeup2.png";
import img3 from "../Images/makeup3.png";
import img4 from "../Images/makeup4.png";
import "./Makeup.css";

const Makeup = () => {
  return (
    <div className="main-container">
      <h1>
        YOUR EVERYDAY <span>GLAM STARTTED</span>
      </h1>
      <div className="makeup-container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default Makeup;
