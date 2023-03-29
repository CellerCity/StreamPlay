import React from "react";
import "../static/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import logo from "../static/img/stream.png";
import image from "../static/img/cybersport_06.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


function SignIn() {
  return (
    
    <div>
      <nav className="nav navbar">
        <img src={logo} alt="logo" className="heading" />
      </nav>
      <div className="row" id = "page1">
        <div className="div1 col-lg-6">
          <img className="image1" src={image} alt="image" />
        </div>
        <div className="div2 col-lg-6">
          <h1 className="text1">Sign In</h1>
          <p>Experience the world through a new lens.</p>
          <form>
            <FontAwesomeIcon icon={faUser} />
            <input type="text" className="username" placeholder="Username" />
            <br />
            <FontAwesomeIcon icon={faLock} />
            <input type="password" className="password" placeholder="Password" />
            <br />
            <button className="signin btn btn-primary btn-md">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
