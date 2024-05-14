import React, { useCallback, useContext } from "react";
import Carousal from "../Carousal/Carousal";
import Front from "../Front/Front";
import Colour from "../Colour/Colour";
import Testomonial from "../Testomonial/Testomonial";
import Swiper from "../Swiper/Swiper";
import Gallery from "../Gallery/Gallery";
import Makeup from "../Makeup/Makeup";
import Trust from "../Trust/Trust";
import MainClothes from "../MainClothes/MainClothes";
import Slidebar from "../Slidebar/Slidebar";
import { SlidebarContext } from "../SliderbarContext/SlidebarContext";
import { CartContext } from "../CartContext/CartContext";
import { IoMdSpeedometer } from "react-icons/io";
// import { BsBag } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
const Home = () => {
  const { isOpen, setIsOpen } = useContext(SlidebarContext);
  const { itemAmount } = useContext(CartContext);
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiShoppingCart
          className="text-2xl"
          style={{ marginLeft: "1500px ", marginTop: "-30px", color: "white"}}
        />
        {/* <div className="absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div> */}
      </div>
      <Carousal />
      <Front />
      <Colour />
      <Gallery />
      <Swiper />
      <Slidebar />
      <MainClothes />
      <Makeup />
      <Testomonial />
      <Trust />
    </div>
  );
};

export default Home;
