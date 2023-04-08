import React, {useState} from 'react';
import '../static/css/signupstyles.css';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import logo from "../static/img/stream.png";
import image from '../static/img/mainsignup1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
      setPasswordVisible((prevState) => !prevState);
    };

    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()
    
        // Handle validations of the input provided
        axios
            .post("http://127.0.0.1:5000/users/add", { username, password })
            .then(response => {
            console.log(response);
            // Handle response
            console.log(response?.statusText);
            if (response?.status === 200 || response?.statusText === "OK"){
                console.log("User successfully added. Login to continue.");
                window.location.href = 'http://127.0.0.1:3000/';  
            }
            else{
                console.log("User not added!")
            }

            })
            .catch(e => {
            console.log(e); // print any exception
            })
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
            <form onSubmit={handleSubmit}>
              <FontAwesomeIcon icon={faUser} />
              {/* <input type="text" className="username" placeholder="Username" /> */}
              <input type="text" class="username" placeholder="Username"
                id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>

              <br/>
              
              <FontAwesomeIcon icon={faLock} />
              <input  type={passwordVisible ? "text" : "password"}
                class="password" placeholder="Password"
                id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
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
};
  