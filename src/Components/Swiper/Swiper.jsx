import React, { useEffect, useState } from "react";
import SwiperDetails from "../SwiperDetails/SwiperDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from "../Images/Logo1.png";
import "./Swiper.css";

const Swiper = () => {
  const testiMonials1 = [
    {
      img: "https://assets.tatacliq.com/medias/sys_master/images/49739180212254.jpg",
    },
    {
      img: "https://assets.tatacliq.com/medias/sys_master/images/49739179950110.jpg",
    },
    {
      img: "https://assets.tatacliq.com/medias/sys_master/images/49792072417310.jpg",
    },
    {
      img: "https://assets.tatacliq.com/medias/sys_master/images/49739180081182.jpg",
    },
    {
      img: "https://assets.tatacliq.com/medias/sys_master/images/49792086147102.jpg",
    },
  ];
  //Owl Carousel Settings
  const options1 = {
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
        <h4 className="miniTitle text-center">LATEST TREND</h4>
        <div className="row">
          <div>
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options1}
            >
              {testiMonials1.length === 0 ? (
                <div class="item">
                  <div class="shadow-effect1">
                    <img class="img-circle1" src={img} alt="img" />
                  </div>
                </div>
              ) : (
                testiMonials1.map((testiMonialDetail) => {
                  return (
                    <SwiperDetails
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

export default Swiper;
