import React from 'react'
import img from '../Images/human.png'
import { Link } from 'react-router-dom';
const Heart = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="container mx-auto flex justify-center mt-auto">
        <div style={{ marginTop: "250px" }}>
          <h1
            style={{
              fontWeight: "bolder",
              fontSize: "20px",
              marginLeft: "25px",
            }}
          >
            PLEASE LOG IN
          </h1>
          <p style={{ marginLeft: "-25px", marginTop: "15px" }}>
            Login to view items in your wishlist.
          </p>
          <img className="mt-3" src={img} alt="" />
          <Link to='/SignIn'>
            <button
              style={{
                marginLeft: "40px",
                padding: "10px",
                border: "1px solid blue",
                width: "150px",
              }}
              className="mt-3 text-blue-600 text-[20px]"
            >
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Heart
