import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../static/img/stream.png";
const style1 = {
    width : '200px',
    margin : '10px 20px '
}


function Home(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} alt=""  style={style1}/>
        <div class="collapse navbar-collapse" id="navbarNav"  >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>

    );
}


export default Home;