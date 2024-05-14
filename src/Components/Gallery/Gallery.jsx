import React, { useState } from "react";
import img1 from "../Images/GalleryImages/1.jpg";
import img2 from "../Images/GalleryImages/2.png";
import img3 from "../Images/GalleryImages/3.png";
import img4 from "../Images/GalleryImages/4.png";
import img5 from "../Images/GalleryImages/5.png";
import img6 from "../Images/GalleryImages/6.png";
import img7 from "../Images/GalleryImages/7.png";
import img8 from "../Images/GalleryImages/8.png";
import img9 from "../Images/GalleryImages/9.png";
import img10 from "../Images/GalleryImages/10.png";
import img11 from "../Images/GalleryImages/11.png";
import img12 from "../Images/GalleryImages/12.png";
import img13 from "../Images/GalleryImages/13.png";
import img14 from "../Images/GalleryImages/14.png";
import img15 from "../Images/GalleryImages/15.png";
import image1 from "../Images/review1.png";
import { CiHeart } from "react-icons/ci";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    {
      index: 1,
      img: img1,
      name: "Here is data",
      image: image1,
    },
    {
      index: 2,
      img: img2,
      name: "Here is data",
      image: image1,
    },
    {
      index: 3,
      img: img3,
      name: "Here is data",
      image: image1,
    },
    {
      index: 4,
      img: img4,
      name: "Here is data",
      image: image1,
    },
    {
      index: 5,
      img: img5,
      name: "Here is data",
      image: image1,
    },
    {
      index: 6,
      img: img6,
      name: "Here is data",
      image: image1,
    },
    {
      index: 7,
      img: img7,
      name: "Here is data",
      image: image1,
    },
    {
      index: 8,
      img: img8,
      name: "Here is data",
      image: image1,
    },
    {
      index: 9,
      img: img9,
      name: "Here is data",
      image: image1,
    },
    
  ];
  return (
    <div className="img-container">
      <h1>
        StyleSail <span>SELECTS</span>
      </h1>
      <div className="media-container">
        {images.map((e, index) => (
          <div className="media">
           
            {<img src={e.img} alt="img"></img>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
