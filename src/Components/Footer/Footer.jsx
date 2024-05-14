import React from "react";
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="wrapper-footer">
      <div className="contact">
        <div className="grid">
          <h3>Ready to get started</h3>
          <h3>Talk to us today</h3>
        </div>
        <button>Get Started</button>
      </div>
      <div className="main-footer">
        <div className="name1">
          <h3>StyleSail</h3>
          <p>"Experience secure and stylish shopping at Stylesail"</p>
        </div>
        <div className="name2">
          <h3>Subscribe To Get Important Updates</h3>
          <input type="email" placeholder="Enter Email" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="name3">
          <div>
            <h3>Follow Us</h3>
          </div>
          <div style={
            {
              display:"flex"
            }
          } className="icon">
            <FaWhatsapp className="icons" />
            <BsInstagram className="icons" />
            <FaLinkedin className="icons" />
          </div>
        </div>
        <div className="name4">
          <h3>Call Us</h3>
          <p>+91 12356558</p>
        </div>
      </div>
      <hr className="hr1" />
      <div className="last-cont">
        <div className="copy1">@2024 StyleSail. All Right Reserved</div>
        <div className="copy2">
          <p>PRIVACY POLICY</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
