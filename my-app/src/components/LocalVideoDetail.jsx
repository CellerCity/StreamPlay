import { backdropClasses } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';


export default function LocalVideoDetail({}) {
    console.log("Inside LocalVideoDetail component");
    const { state } = useLocation();
    const { vidName, thumbnailName, title, description } = state;
    
    console.log(vidName);
    console.log(thumbnailName);
    console.log(title);
    console.log(description);

    const videoURL = "http://localhost:5000/videos/display_vid/" + vidName; 
    const posterURL = "http://localhost:5000/videos/display_thumb/" + thumbnailName;

    return (
        <div style={{margin:"0px", padding:"20px", display: "flex",
            justifyContent: "center", "align-items": "center", flexWrap:"wrap", flexDirection: "column",
            backgroundColor: "#004", color:"blue"}}>
        <video width={"786px"} height={"420px"} controls poster={posterURL}>
            <source src={videoURL} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <br/>
        <h3>{title}</h3>
        <p style={{color: "white"}}><b>Description:</b> {description}</p>       
        </div>
    )
};
