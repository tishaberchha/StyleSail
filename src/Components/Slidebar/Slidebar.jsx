import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SlidebarContext } from "../SliderbarContext/SlidebarContext";
import { FaArrowRight } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem" 
import { FaRegTrashAlt } from "react-icons/fa";

const Slidebar = () => {
  const { cart,clearCart,total,itemAmount} = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SlidebarContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pinter w-8 h-8 flex justify-center items-center"
        >
          <FaArrowRight className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gp-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id}></CartItem>;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total : </span>${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="bg-red-500 cursor-pointer py-4 text-white w-12 h-12 flex justify-center items-center text-xl "
          >
            <FaRegTrashAlt />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 w-full flex p-2 justify-center items-center text-black font-medium"
        >
          View Cart
        </Link>
        <Link
          to="/cartdone"
          className="bg-black w-full flex p-2 justify-center items-center text-white font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Slidebar;
