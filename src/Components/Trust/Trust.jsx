import React from "react";
import img from "../Images/trust.png";
import "./Trust.css";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import TrustPage from "../TrustPage/TrustPage";
const Trust = () => {
  return (
    <div className="trust-container">
      <div className="trust-main">
        <div className="content-trust">
          <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}>
            SHOP SMART & STAY SAFE
          </h1>
          <p>
            At Stylesail, we understand the paramount importance of safeguarding
            your personal information and ensuring secure transactions.Your
            personal information is treated with the utmost confidentiality.
          </p>
          <Link to="/TrustPage">
            <button type="button" class="btn btn-outline-danger">
              Learn More
            </button>
          </Link>
        </div>
        <div className="img-trust">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trust;
