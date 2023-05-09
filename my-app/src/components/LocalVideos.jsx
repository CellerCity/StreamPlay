import React, { useState, useEffect } from 'react'
import LocalVideoCard from './LocalVideoCard';
import "../static/css/localvideos.css";
const axios = require("axios");

export default function LocalVideos({ selectedCategory }) {
    const [videos, setVideos] = useState([]);
    // console.log("Inside LocalVideoDetail Component");
    // console.log(selectedCategory);
    const tagSearchStr = (selectedCategory?.includes(",")) ?  selectedCategory.replace(/\s+/g, '').replace(/,+/g, ',') : selectedCategory;
    // if the search string has commas we can pass the individual comma separated terms as tags(string)

    console.log(tagSearchStr);
    const serverReqURL = `http://localhost:5000/videos/search?title=${selectedCategory}&tags=${tagSearchStr}`;
    console.log(serverReqURL);
    useEffect(() => {
      async function fetchVideos() {
        console.log(serverReqURL);
        const response = await axios.get(serverReqURL);
        setVideos(response.data);
    }
    fetchVideos();
    }, [selectedCategory]);
    
    // console.log(videos);

    if(videos?.length > 0){
        // if the count of videos received is non-zero then display the videos
        return (
        <> 
            <hr/>
            <br/>
            <h3 style={{color: "white"}}>Related videos found in the local database:</h3>
            <br/>
            <div className='video-list'>
                {videos.map((video) => (
                    <div className='video-card-link'>
                        <LocalVideoCard key={video._id} video={video}/>
                    </div>
                ))}
            </div>
        </>
        );
        }

};
  