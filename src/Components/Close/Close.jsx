import React,{useState,useContext} from 'react'
import { FaArrowRight } from "react-icons/fa";
import { SlidebarContext } from "../SliderbarContext/SlidebarContext";
import gift from "../Images/gift.png"
const Close = () => {
     const [click, setClick] = useState(false);
     const handleClick = () => setClick(!click);
     const closeMobileMenu = () => setClick(false);
     const { isOpen, handleClose, setIsOpen } = useContext(SlidebarContext);
  return (
    <div>
      <div
        style={{ backgroundColor: "white" }}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-ful fixed top-0 h-full shadow-2xl md:w[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
      >
        <div className="flex items-center justify-end py-6 border-b">
          {/* <div className="uppercase text-sm font-semibold">
            Shopping bag ({0})
          </div> */}
          <div
            onClick={handleClose}
            className="cursor-pinter w-8 h-8 flex justify-center items-center"
          >
            <FaArrowRight className="text-2xl" />
          </div>
        </div>
        <div>
          <img style={{ height: "16rem", width: "100%" }} src={gift} alt="" />
        </div>
        <div>
          <h1 className="text-[25px] text-gray-500">Gift Wrapping</h1>
          <h1 style={{ fontWeight: "bolder" }} className="text-[30px] mt-2">
            Make it Special
          </h1>
        </div>
        <div>
          <input
            style={{
              borderBottom: "1px solid black",
              marginTop: "30px",
              fontSize: "20px",
            }}
            type="text"
            placeholder="Recipient Name"
          />
        </div>
        <div>
          <input
            style={{
              borderBottom: "1px solid black",
              marginTop: "30px",
              fontSize: "20px",
            }}
            type="text"
            placeholder="Message"
          />
        </div>
        <div>
          <input
            style={{
              borderBottom: "1px solid black",
              marginTop: "30px",
              fontSize: "20px",
            }}
            type="text"
            placeholder="Sender Name"
          />
        </div>
        <div className='w-[340px]'>
          <p className='text-[15px] mt-5'>
            <span style={{color:"black",fontWeight:"bolder" }}>Please Note : </span>
      Gift wrapping is not available for Pay on Delivery
            Orders
          </p>
        </div>
        <div>
          <button className='w-[100%] mt-3 bg-gray-400 text-white p-2'>Apply Gift Wrap</button>
        </div>
      </div>
    </div>
  );
}

export default Close
