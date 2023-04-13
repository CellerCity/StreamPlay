import React from 'react'
import { Player } from 'video-react';
import { Link, useNavigate } from 'react-router-dom';


export default function LocalVideoCard( {video} ) {
    // console.log("Inside Local Video Card");
    console.log(video);
    // console.log(key);
    const vidName = video?.videoFilePath;
    const thumbnailName = video?.thumbnailFilePath;
    const title = video?.title;
    const description = video?.description;
    // console.log(vidName);
    // console.log(thumbnailName);
    // console.log(title);
    // console.log(description);


    const navigate = useNavigate();

    function handleClick() {
      navigate("/local_video", {
        state: { vidName, thumbnailName, title, description }
      });
    }

    
    // the backend link that gives the url which returns the mp4 file
    const videoURL = "http://localhost:5000/videos/display_vid/" + vidName; 
    const posterURL = "http://localhost:5000/videos/display_thumb/" + thumbnailName;
    

    return (
      <>
    {/* <video width="358px" height="358px" controls poster={posterURL}>
      <source src={videoURL} type="video/mp4"/>
        Your browser does not support the video tag.
    </video> */}
    <div className="card" style={{width:"335px", height:"358px", backgroundColor:"black"}} onClick={handleClick}>
      {/* <Link to={`/local_video/${vidName}`}> */}
        <img className="card-img-top" src={posterURL} alt={title} style={{width:"100%", height:"235px"}}/>
      {/* </Link> */}
      <div className="card-body" style={{width:"100%", height:"50px", color:"blue"}}>
        <u>
        <h6 className="card-title">{title}</h6>
        </u>
        <p className="card-text" style={{fontSize: "14px", color: "white"}}>{description}</p>
      </div>
    </div>
  
  </>
  );
};