import React from 'react';
import '../static/css/signupstyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import logo from "../static/img/stream.png";
import image from '../static/img/mainsignup1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";


function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      
      <div className="maindiv row">
      <nav className="nav navbar">
        <img src={logo} alt="logo" className="heading" />
      </nav>
        <div className="div1 col-lg-6">
          <img className="image1" src={image} alt="image" />
        </div>
        <div className="div2 col-lg-6">
          <h1 className="text1">Sign up</h1>
          <p>Unlimited entertainment at your fingertips.</p>
          <form>
            <FontAwesomeIcon icon={faUser} />
            <input type="text" className="username" placeholder="Username" />
            <br/>
            
            <FontAwesomeIcon icon={faLock} />
            <input
              type={passwordVisible ? "text" : "password"}
              className="password"
              placeholder="Password"
            />
            <br />
            <input
              type="checkbox"
              className="checkbox"
              onChange={togglePasswordVisibility}
            />{" "}
            Show Password
            <br />
            <button className="signup btn btn-info btn-md">Sign up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
