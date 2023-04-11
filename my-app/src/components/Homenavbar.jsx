import React from "react";
import logo from "../static/img/stream.png";
import { NavLink } from "react-router-dom";

const myStyle = {
    backgroundColor: ' #ADD8E6'

  };

const Homenavbar = () => {
    return (
        
        <>
        
 
        <nav className="navbar navbar-expand-lg navbar-light " style={myStyle}>
        <img src={logo} alt="logo" className="heading" />

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto " style={{paddingLeft : 600 }}>
      <li className="nav-item ">
        <NavLink className="nav-link " to="/home">Home</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link " to="/videos_all">Videos</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link " to="/video_upload">Upload</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About us</NavLink>
      </li>
      
    </ul>
    
  </div>
</nav>

        </>
    )
}

export default Homenavbar;