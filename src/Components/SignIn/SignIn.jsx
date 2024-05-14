import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import img from "../Images/loginmodel.jpeg";
import "./SignIn.css";
  import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignIn = () => {
  const [action, seAction] = useState("Login");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
      setName("");
      setEmail("");
      setPassword("");
  }
  const handleSignUp = () => {
    setName("");
    setEmail("");
    setPassword("");
  }
  const notify = () => {
    toast("😄 Login Succesfully", {
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
    <div className="login-main-container">
      <div className="img-login-container">
        <img src={img} alt="" />
      </div>
      <div className="login-container">
        <div className="herder-login">
          <div className="text-login">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <FaUser style={{ margin: "0px 30px" }} />
              <input
                type="text"
                placeholder="Name"
                id="mobile"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="input">
            <MdEmail style={{ margin: "0px 30px" }} />
            <input
              type="email"
              placeholder="Email Id"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <RiLockPasswordFill style={{ margin: "0px 30px" }} />
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="forget-password">
          Lost Password? <span>Click Here!</span>
        </div>
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
          
              handleSignUp();
              seAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              notify();
              handleSubmit();
              seAction("Login");
            }}
          >
            Login
          </div>
              <ToastContainer/>
           
        </div>
      </div>
    </div>
  );
};

export default SignIn;
