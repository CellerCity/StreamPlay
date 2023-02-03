import React from 'react';
import './static/css/style.css';
import logoImg from './static/img/stream.png'
import cyberImg from './static/img/cybersport_06.jpg';
import faviconImg from './static/img/favicon.ico';

function SignIn(){
    return (  
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Alice&display=swap"
        rel="stylesheet"
    />
    </head>
    <body>

    <nav className="nav navbar">
        <img src={logoImg} alt="logo" className="heading"/>
        <a href="sign_up"><button className="signup btn btn-outline-primary btn-md" >Sign up</button></a>
    </nav>
    <div className="row">
        <div className="div1 col-lg-6">
        <img className="image1" src={cyberImg} alt="This is an iamge" />
        </div>
        <div className="div2 col-lg-6">
        <h1 className="text1">Experience the world through a new lens.</h1>
        <form action="">
            <i className="fa-solid fa-user"></i>
            <input type="text" className="username" placeholder="Username" />
            <br />
            <i className="fa-solid fa-lock"></i>
            <input type="password" className="password" placeholder="Password" />
            <br />
            <button className="signin btn btn-primary btn-md">Sign in</button>
        </form>
        </div>
        
    </div>
    </body>
    </html>
    );
}

export default SignIn;