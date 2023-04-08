import React, {useState} from 'react';
import '../static/css/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import logo from "../static/img/stream.png";
import image from "../static/img/cybersport_06.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

import PropTypes from 'prop-types';
import axios from "axios";

export default function SignIn() {

    const handleSubmit = e => {
                // Prevent the default submit and page reload
                e.preventDefault()
            
                // Handle validations of the input provided
                axios
                  .get("http://127.0.0.1:5000/users")
                  .then(response => {
                    // console.log(response);
                    // Handle response
                    // console.log(typeof(response));
                    // console.log(response?.data);
                    let userEntries = response?.data;
                    let numUsers = userEntries.length;
                    // console.log(numUsers);
                    let isUsernameCorrect = false, isPasswordCorrect = false;
                    for(let i=0; i<numUsers; i++){
                        // console.log(userEntries[i]);
                        let saved_username = userEntries[i]['username'];
                        let saved_password = userEntries[i]['password'];
                        
                        if(saved_username === username){
                            isUsernameCorrect = true;
                            console.log("user matched");
                            if(saved_password === password){
                                isPasswordCorrect = true;
                                console.log("password matched");
                                break;
                            }
                        }
                    }
                    if(isUsernameCorrect && isPasswordCorrect){
                        console.log("Found the correct user entry.")
                        window.location.href = 'http://127.0.0.1:3000/videos_all';
                    }
                    else{
                        console.log("No such user record found.")
                    }
                  })
              };
        
            const [username, setUsername] = useState(""); 
            const [password, setPassword] = useState("");
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
            <form onSubmit={handleSubmit}>
              <FontAwesomeIcon icon={faUser} />
              <input type="text" className="username" placeholder="Username" 
            id="username" value={username} onChange={e => setUsername(e.target.value)}
            />
              <br />
              <FontAwesomeIcon icon={faLock} />
              <input type="password" className="password" placeholder="Password" 
                id="password" value={password} onChange={e => setPassword(e.target.value)}
            />
              <br />
              <button className="signin btn btn-primary btn-md">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    );
};
  