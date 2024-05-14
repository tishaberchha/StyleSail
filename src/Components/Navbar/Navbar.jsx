import React, { useState,useContext } from "react";
import logo from "../Images/NavLogo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo1 from "../Images/Logo1.png";
import { CiHeart } from "react-icons/ci";
// import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { SlidebarContext } from "../SliderbarContext/SlidebarContext";
import { CartContext } from "../CartContext/CartContext";
import { IoMdSpeedometer } from "react-icons/io";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    const { isOpen, setIsOpen } = useContext(SlidebarContext);
    const { itemAmount } = useContext(CartContext);

  return (
    <div className="fix">
      <nav className="navbar">
        <Link to="/">
          {" "}
          <img className="main-logo" src={logo1} alt="" />{" "}
        </Link>
        <div className="wrapper">
          <div className="first">
            <h1>StyleSail</h1>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item haa">
              <Link
                to="/men"
                className="nav-links mens"
                onClick={closeMobileMenu}
              >
                Men
              </Link>
            </li>
            <li className="nav-item haa">
              <Link
                to="/women"
                className="nav-links mens"
                onClick={closeMobileMenu}
              >
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/beauty"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Beauty
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Homes & Living
              </Link>
            </li>
          </div>

          <div className="second">
            <div className="input-nav">
              <CiSearch
                style={{
                  color: "white",
                  fontSize: "30px",
                  position: "absolute",
                  padding: "6px 0 0 5px",
                  fontWeight: "bolder",
                  marginLeft: "-45px",
                }}
              />
              <input
                style={{ marginLeft: "-55px" }}
                id="in"
                type="text"
                placeholder="Search here....."
              />
            </div>
            <div style={{ display: "flex" }} className="data-nav">
              <Link className="signin" to="/SignIn">
                Sign In
              </Link>
              <Link className="addcart" to="/AddToCart">
                <CiHeart
                  style={{
                    marginTop: "5px",
                    color: "white",
                    fontSize: "22px",
                  }}
                />
              </Link>
              <div onClick={() => setIsOpen(!isOpen)}>
                <CiShoppingCart
                  className="text-2xl"
                  style={{
                    color: "white",
                    marginTop: "4px",
                    marginLeft: "18px",
                  }}
                />
                <div
                  style={{ marginTop: "-30px", marginLeft: "35px" }}
                  className="bg-red-500 absolute  text-[12px] w-[18px] text-white rounded-full flex justify-center items-center"
                >
                  {itemAmount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
