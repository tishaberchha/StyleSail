import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../Images/slider1.png";
import slider2 from "../Images/slider2.png";
import slider3 from "../Images/slider3.png";
import slider4 from "../Images/slider4.jpg";
import slider5 from "../Images/slider5.png";
import slider6 from "../Images/slider6.png";
import slider7 from "../Images/slider7.jpg";
import "./Carousal.css";
const Carousal = () => {
  return (
    <div className="slider">
      <Carousel
        data-bs-theme="dark"
        // data-bs-ride="true"
        data-interval="0"
        className="m-auto main"
      >
        <Carousel.Item>
          <img className="d-block w-100" src={slider5} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider6} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider4} alt="Forth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="sixth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider7} alt="seventh slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousal;
