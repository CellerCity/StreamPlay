import React, {useState} from 'react';
import './static/css/style.css';
import logoImg from './static/img/stream.png'
import cyberImg from './static/img/cybersport_06.jpg';
import faviconImg from './static/img/favicon.ico';
import {FaUserAlt}  from "react-icons/fa";
import { AiTwotoneLock} from "react-icons/ai"
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


export default function SignIn({ setToken }){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
        window.location = "/";
      }

    return (  

    <html lang="en">
    <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Streamplay: Sign in</title>
    <link rel="icon" href={faviconImg} />
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossOrigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link
        href="https://fonts.googleapis.com/css2?family=Alice&display=swap"
        rel="stylesheet"
    />
    <script
      src="https://kit.fontawesome.com/4fa898188f.js"
      crossOrigin="anonymous"
    ></script>
    <link 
  href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" 
  rel="stylesheet"  type='text/css'></link>
    </head>
    <body>

    <nav className="nav navbar">
    <a href="videos">
        <img src={logoImg} alt="logo" className="heading"/>
    </a>
        <a href="sign_up"><button className="signup btn btn-outline-primary btn-md" >Sign up</button></a>
    </nav>
    <div className="row">
        <div className="div1 col-lg-6">
        <img className="image1" src={cyberImg} alt="This is an iamge" />
        </div>
        <div className="div2 col-lg-6">
        <h1 className="text1">Experience the world through a new lens.</h1>
        <form onSubmit={handleSubmit}>

            <div class="reactIcons">
                <FaUserAlt size={23}/>
            </div>
            <input type="text" className="username" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
            <br />
            <div class="reactIcons">
                <AiTwotoneLock size={27}/>
            </div>
            <input type="password" className="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <br />
            <button className="signin btn btn-primary btn-md">Sign in</button>
        </form>
        </div>
    </div>
    </body>
    </html>

    );
}


SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
}
