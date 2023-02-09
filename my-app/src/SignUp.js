import React from 'react';
import './static/css/signupstyles.css';
import logoImg from './static/img/stream.png'
import signup_img from './static/img/mainsignup1.png';
import faviconImg from './static/img/favicon.ico';
import {FaUserAlt}  from "react-icons/fa";
import {MdEmail}  from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs"
import { AiTwotoneLock} from "react-icons/ai"

function SignUp(){
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
                <form action="">
                    {/* <i class="fa fa-user"></i> */}
                    <FaUserAlt size={23}/>
                    <input type="text" class="username" placeholder="Username" />
                    <br />
                    {/* <i class="fa fa-envelope"></i> */}
                    <MdEmail size={27}/>
                    <input type="email" class="email" placeholder="Email" />
                    <br />
                    {/* <i class="fa fa-phone"></i> */}
                    <BsFillTelephoneFill size={23}/>
                    <input type="text" class="phone" placeholder="Phone Number" />
                    <br />
                    {/* <i class="fa fa-lock"></i> */}
                    <AiTwotoneLock size={27}/>
                    <input type="password" class="password" placeholder="Password" />
                    <br />
                    <input type="checkbox" class="checkbox" /> Show Password
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