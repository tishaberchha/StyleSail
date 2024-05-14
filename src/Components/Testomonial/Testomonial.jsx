import React, { useEffect, useState } from "react";
import TestiMonialsDetails from "../TestiMonialsDetails/TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from "../Images/model10.png";
import "./Testomonial.css";
import img1 from "../Images/human1.jpeg";
import img2 from "../Images/human2.jpeg";
import img3 from "../Images/human3.jpeg";
import img4 from "../Images/human4.jpeg";
import img5 from "../Images/human5.jpeg";

const Testomonial = () => {
  const testiMonials = [
    {
      name: "Priyanka Sharma",
      description:
        "This company is extremely passionate about the work they do. The executives are extremely helpful and go out of their way to support their customers. ",
      address: "INDIA",
      img: img3,
    },
    {
      name: "Brandoni Savage",
      description:
        "It is a superb service by styleSail. It’s very hassle free, convenient, time saving, comfortable Service. ",
      address: "USA",
      img: img2,
    },
    {
      name: "Steve Burns",
      description:
        "The product descriptions are detailed, and I appreciate the variety of items available. The checkout process is smooth, and I've never encountered any issues with payment or delivery. ",
      address: "Australia",
      img: img1,
    },
    {
      name: "Krishna Verma",
      description:
        "I absolutely love StyleSail! It's my go-to online shopping destination for everything I need. The website is user-friendly, making it easy to navigate through different categories",
      address: "MANALI",
      img: img4,
    },
    {
      name: "Kevin Canlas",
      description:
        "StyleSail is fantastic! I've been a loyal customer for years, and I've never been disappointed. The website layout is intuitive, and I appreciate how they constantly update their inventory with new products",
      address: "USA",
      img: img5,
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className="testimonials pt-70 pb-70">
      <div className="container mt-5">
        <h4 className="miniTitle text-center fw-bold">STYLESAIL</h4>
        <div className="text-center ">
          <h3 style={{fontSize:"20px"}} className="sectionTitle">What Our Clients are Saying?</h3>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {testiMonials.length === 0 ? (
                <div class="item">
                  <div class="shadow-effect">
                    <img class="img-circle" src={img} alt="img" />
                  </div>
                  <div class="testimonial-name">
                    <h5>Rajon Rony</h5>
                    <small>ITALY</small>
                  </div>
                </div>
              ) : (
                testiMonials.map((testiMonialDetail) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={testiMonialDetail._key}
                    />
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testomonial;
