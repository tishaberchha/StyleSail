import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaRegEye } from "react-icons/fa";
import CartProvider, { CartContext } from "../CartContext/CartContext";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center photo">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="photo absolute top-1 right-1 group-hover:right-5 group-hover:opacity-1 p-2 flex flex-col items-center justify-center gap-y-2 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-6 h-6 bg-red-500">
              <FaPlus className="text-1xl" />
            </div>
          </button> 
          <Link
            to={`/product/${id}`}
            className="w-6 h-6 bg-white flex justify-center items-center drop-shadow-xl text-primary"
          >
            <FaRegEye />
          </Link>
        </div>
      </div>
      {/* category */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
