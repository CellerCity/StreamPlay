import React, {useState} from 'react';
import './static/css/signupstyles.css';
import logoImg from './static/img/stream.png'
import signup_img from './static/img/mainsignup1.png';
import {FaUserAlt}  from "react-icons/fa";
import { AiTwotoneLock} from "react-icons/ai"
import axios from "axios";

function SignUp(){
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    }

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
                window.location.href = 'http://127.0.0.1:3000/sign_in';  
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
        <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Streamplay : Sign up</title>
            <link rel="icon" href="img/favicon.ico" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                crossorigin="anonymous"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                rel="stylesheet"
            />
            <script
                src="https://kit.fontawesome.com/4fa898188f.js"
                crossorigin="anonymous"
            ></script>
                <link 
                href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" 
                rel="stylesheet"  type='text/css'></link>
            </head>
            <body>
            <nav class="nav navbar">
                <a href="/videos">
                <img src={logoImg} alt="logo" class="heading" />
                </a>
                    
            </nav>
            <div class="maindiv row">
                <div class="div1 col-lg-6">
                <img class="image1" src={signup_img} alt="image" />
                </div>
                <div class="div2 col-lg-6">
                <h1 class="text1">Sign up</h1>
                <p>Unlimited entertainment at your fingertips.</p>
                <form onSubmit={handleSubmit}>
                    {/* <i class="fa fa-user"></i> */}
                    <FaUserAlt size={23}/>
                    <input type="text" class="username" placeholder="Username"
                    id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                    <br />
                    {/* <i class="fa fa-lock"></i> */}
                    <AiTwotoneLock size={27}/>
                    <input  type={passwordVisible ? "text" : "password"}
                    class="password" placeholder="Password"
                    id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <br />
                    <input type="checkbox" class="checkbox" 
                        onChange={togglePasswordVisibility}
                    /> Show Password
                    <br />
                    <button class="signup btn btn-info btn-md">Sign up</button>
                </form>
                </div>
            </div>
            <script type="text/javascript" src="js/signup.js"></script>
            </body>
        </html>
    );
}

export default SignUp;