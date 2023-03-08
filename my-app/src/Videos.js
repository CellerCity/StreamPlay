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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/video.css"/>
        <title>Streamplay :Home</title>
      </head>
      <body>
        <nav class="navbar navbar-expand-lg navbar-light navbars">
          <a class="navbar-brand" href="#">
            <img src="img/stream.png" alt="" width="150"/>
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Anime</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Music</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">News</a>
              </li>
            </ul>
          </div>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        
      
        <video class="video-panel" controls>
          <source src="videos/LabMicro.mp4" type="video/mp4"/>
        </video>
        <video class="video-panel" controls>
          <source src="videos/Microscope.mp4" type="video/mp4"/>
        </video>
        <video class="video-panel" controls>
          <source src="videos/Vaccine.mp4" type="video/mp4"/>
        </video>
        <video class="video-panel" controls>
          <source src="videos/VR.mp4" type="video/mp4"/>
        </video>
        <video class="video-panel" controls>
          <source src="videos/Comb.mp4" type="video/mp4"/>
        </video>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
      </html>
      
      );
}

export default Videos;