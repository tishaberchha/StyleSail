import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../Images/model1.png";
import img2 from "../Images/model2.png";
import img3 from "../Images/model3.png";
import img4 from "../Images/model4.png";
import img5 from "../Images/model5.png";
import img6 from "../Images/model6.png";
import img7 from "../Images/model7.png";
import img8 from "../Images/model8.png";
import img9 from "../Images/model9.png";
import img10 from "../Images/model10.png";
import "./Front.css";
const Front = () => {
  return (
    <div className="main">
      <Card
        style={{
          width: "90rem",
          //   margin: "auto",
          display: "flex",
          justifyContent: "center",
          outline: "none",
          flexDirection: "row",
          border: "none",
        }}
      >
        <Card.Img
          variant="top"
          src={img1}
          style={{ width: "8rem", height: "10rem", marginRight: "3rem" }}
        />

        <Card.Img
          variant="top"
          src={img2}
          style={{ width: "8rem", height: "10rem", marginRight: "3rem" }}
        />
        <Card.Img
          variant="top"
          src={img3}
          style={{ width: "8rem", height: "10rem", marginRight: "3rem" }}
        />
        <Card.Img
          variant="top"
          src={img4}
          style={{ width: "8rem", height: "10rem", marginRight: "3rem" }}
        />
        <Card.Img
          variant="top"
          src={img5}
          style={{ width: "8rem", height: "10rem", marginRight: "3rem" }}
        />
        <Card.Img
          variant="top"
          src={img6}
          style={{ width: "8rem", height: "10rem", marginRight: "3rem" }}
        />
        <Card.Img
          variant="top"
          src={img10}
          style={{ width: "8rem", height: "10rem", marginRight: "3rem" }}
        />
        <Card.Img
          variant="top"
          src={img7}
          style={{ width: "8rem", height: "10rem", marginRight: "3rem" }}
        />
        <Card.Img
          variant="top"
          src={img8}
          style={{ width: "8rem", height: "10rem", marginRight: "3rem" }}
        />
        <Card.Img
          variant="top"
          src={img9}
          style={{ width: "8rem", height: "10rem", marginRight: "3rem" }}
        />
      </Card>
      <div className="colourful"></div>
    </div>
  );
};

export default Front;
