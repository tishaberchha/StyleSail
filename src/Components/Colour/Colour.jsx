import React from "react";
import "./Colour.css";
import coin from "../Images/coin.png";
const Colour = () => {
  return (
    <div className="box">
      <div className="firstbox">
        <h1>FLAT ₹500 CASHBACK ALERT!</h1>
        <p>Get ₹500 Cash on all order above ₹5000</p>
      </div>
      <div className="secondbox">
        <img src={coin} alt="" />
      </div>
    </div>
  );
};
export default Colour;
