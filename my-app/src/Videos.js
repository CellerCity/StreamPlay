import React from "react";
import './static/css/video.css';
import vid1 from './static/videos/LabMicro.mp4'
import vid2 from './static/videos/Microscope.mp4'
import vid3 from './static/videos/Vaccine.mp4'
import vid4 from './static/videos/VR.mp4'
import vid5 from './static/videos/Comb.mp4'


function Videos(){
    return(
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <title>Video Page</title>
    </head>

    <body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#"></a>
        </div>
        <ul class="nav navbar-nav ">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Anime</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">News</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
        </div>
    </nav>
    <hr/>
    <video class="video-panel" controls>
        <source src={vid1} type="video/mp4"/>
    </video>
    <video class="video-panel" controls>
        <source src={vid2} type="video/mp4"/>
    </video>
    <video class="video-panel" controls>
        <source src={vid3} type="video/mp4"/>
    </video>
    <video class="video-panel" controls>
        <source src={vid4} type="video/mp4"/>
    </video>
    <video class="video-panel" controls>
        <source src={vid5} type="video/mp4"/>
    </video>
    </body>
    </html>
    );
}

export default Videos;