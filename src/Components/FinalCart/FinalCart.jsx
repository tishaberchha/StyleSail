import React,{useContext,useState} from 'react'
import './FinalCart.css'
import CartItem from "../CartItem/CartItem"; 
import { CartContext } from "../CartContext/CartContext";
import { SlidebarContext } from "../SliderbarContext/SlidebarContext";
import { CiGift } from "react-icons/ci";
import img from '../Images/COUPAN.png'
import { FaArrowRight } from "react-icons/fa";
  import { ToastContainer, toast } from "react-toastify";
import Close from '../Close/Close';
import Slidebar from '../Slidebar/Slidebar';
const FinalCart = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  // const { isOpen, handleClose } = useContext(SlidebarContext);
    const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);
      const { isOpen,handleClose, setIsOpen } = useContext(SlidebarContext);
 const notify = () => {
 toast.success("Order Successfully", {
   position: "top-center",
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
 });
  }
  
  return (
    <div className="first-final pt-20 pb-12">
      <div className="container mx-auto flex felx-col">
        <div
          style={{ height: "1000px" }}
          className="flex flex-col lg:felx-row w-[900px]"
        >
          <div
            style={{ backgroundColor: "white", height: "12rem" }}
            className=""
          >
            <h1 className="pt-4 pl-3 font-medium text-[20px]">
              Delivery Options
            </h1>

            <div className="pt-3 pl-3">
              <h1 className="text-[15px] text-gray-500">
                Please Select Your Delivery Option
              </h1>
              <div className="mt-3">
                <input style={{ marginLeft: "0px" }} type="radio" name="exe" />{" "}
                Standard Delivery
                <input
                  style={{ marginLeft: "6rem" }}
                  type="radio"
                  name="exe"
                />{" "}
                Express Delivery
                <input
                  style={{ marginLeft: "6rem" }}
                  type="radio"
                  name="exe"
                />{" "}
                Express Store Pickup
                <h1
                  style={{ color: "green", fontSize: "16px" }}
                  className="mt-3 mb-3"
                >
                  Typically delivers between 3-5 days*
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <img
              style={{ height: "130px" }}
              className="w-[1000px]"
              src={img}
              alt=""
            />
            <h1 style={{ fontWeight: "bolder" }} className="mt-4">
              {" "}
              ITEM ({itemAmount})
            </h1>
          </div>
          <div className="">
            <div className="flex flex-col gp-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
              {cart.map((item) => {
                return <CartItem item={item} key={item.id}></CartItem>;
              })}
            </div>
          </div>
        </div>

        <div style={{ height: "700px" }} className="w-[500px] ml-20">
          <div
            style={{ height: "100px", backgroundColor: "white" }}
            className=""
          >
            <div className="">
              <h1 className="pt-3 pl-2">Apply Coupon</h1>
            </div>
            <div className="pl-2 pt-3">
              <input
                style={{
                  border: "1px solid gray",
                  padding: "3px",
                  width: "300px",
                }}
                type="text"
                placeholder="Enter coupon Code"
              />
              <button
                style={{
                  padding: "5px",
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "15px",
                  width: "70px",
                }}
              >
                Apply
              </button>
            </div>
          </div>
          <div
            style={{ height: "100px", backgroundColor: "white" }}
            className="mt-5"
          >
            <div onClick={() => setIsOpen(!isOpen)}>
              <CiGift
                className="text-2xl"
                style={{
                  height: "100px",
                  color: "black",
                  marginLeft: "18px",
                }}
              />
              <div
                style={{
                  marginTop: "-65px",
                  marginLeft: "70px",
                  fontSize: "20px",
                }}
              >
                Gift Wrap
              </div>

              <Close />
            </div>
          </div>
          <div
            style={{ backgroundColor: "white", height: "400px" }}
            className="mt-5"
          >
            <div>
              <h1
                style={{ fontWeight: "bolder", fontSize: "20px" }}
                className="pt-4 pl-3"
              >
                Order Summary
              </h1>
              <div className="flex mt-4">
                <h1 className="pl-4 text-[18px]">Sub Total</h1>
                <p style={{ paddingLeft: "20rem" }}>
                  $ {parseFloat(total).toFixed(2)}
                </p>
              </div>
              <div className="flex text-[18px] mt-2">
                <h1 className="pl-4">Delivery Charges</h1>
                <p style={{ paddingLeft: "16rem", color: "green" }}>Free</p>
              </div>
              <div className="flex text-[18px] mt-2">
                <h1 className="pl-4">Coupan Discount</h1>
                <p style={{ paddingLeft: "13rem", fontWeight: "bolder" }}>
                  Apply Coupon
                </p>
              </div>
              <hr className="mt-3 border-dotted m-auto w-[470px]" />
            </div>
            <div className="mt-3 ml-3">
              <div className="flex gap-x-64">
                <h1 style={{ fontWeight: "bolder", fontSize: "25px" }}>
                  Total Price
                </h1>
                <p className="text-red-400 text-[20px]">
                  $ {parseFloat(total).toFixed(2)}
                </p>
              </div>
              <hr className="mt-3 border-dotted m-auto w-[470px]" />
            </div>
            <div className="mt-3 ml-4">
              <div className="flex gap-x-80">
                <h1 style={{ fontSize: "18px", color: "gray" }}>
                  Total Savings
                </h1>
                <p className="ml-4">${0}</p>
              </div>
              <button
                className="w-[470px] h-10 text-white text-[20px] mt-5 bg-black"
                onClick={() => {
                  notify();
                }}
              >
                Order Now
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalCart
