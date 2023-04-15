import React, { useState } from "react";
import axios from "axios";

const allowedVideoExtensions = ["mp4", "mov", "avi", "mkv", "webm", "ogg"];
const allowedImgFileExtensions = ["jpg", "jpeg", "png", "gif"];
const maxVideoSize = 10485760; // 10 mb
const maxImgFileSize = 52428800; // 50 mb 
const minTitleLength = 3;
const maxTitleLength = 100;
const maxDescriptionLength = 250;
const maxTagsFieldLength = 100;

const VideoUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null); // video file
  const [imgFile, setImgFile] = useState(null); // video thumbnail-image file

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  
  const handleImgFileChange = (event) => {
    setImgFile(event.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // handling data validation

    // if no files are uploaded
    if(!file){
      console.log("Please select a video file for upload.");
      return;
    }
    if(!imgFile){
      console.log("Please select a image file for upload.");
      return;
    }

    // verifying the extensions
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (!allowedVideoExtensions.includes(fileExtension)) {
      alert("Invalid video file type. Please select a file with the following extensions: " + allowedVideoExtensions.join(", "));
      return;
    }

    const imgFileExtension = imgFile.name.split(".").pop().toLowerCase();
    if (!allowedImgFileExtensions.includes(imgFileExtension)) {
      alert("Invalid image file type. Please select a file with the following extensions: " + allowedImgFileExtensions.join(", "));
      return;
    }

    // verifying the size of the files
    if (file.size > maxVideoSize) {
      alert("Video's size is too large. Please select a file that is smaller than 50 MB.");
      return;
    }
    if (imgFile.size > maxImgFileSize) {
      alert("Image's size is too large. Please select a file that is smaller than 10 MB.");
      return;
    }

    // verifying the length of the title, description & tags fields
    if (title.length < minTitleLength || title.length > maxTitleLength ){
      alert(`"Title length's should be between ${minTitleLength} and ${maxTitleLength} characters"`);
      return;
    }
    
    if (description.length > maxDescriptionLength ){
      alert(`"Description can be atmost ${maxDescriptionLength} characters."`);
      return;
    }

    // maxTagFieldLength
    if (tags.length > maxTagsFieldLength ){
      alert(`"Tags field can be atmost ${maxTagsFieldLength} characters."`);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    
    let tempTags = tags.replace(/\s/g, ''); // remove all whitespaces
    tempTags = tempTags.replace(/,+/g, ','); // replace multiple commas with a single one
    let tagsArray = tempTags.split(","); // splitting tags on [ , ]
    
    formData.append("tags", tagsArray);
    formData.append("video-file", file); 
    formData.append("image-file", imgFile);

    // console.log(formData);
    // awesome-file corresponds to name of the input-field that is useful afterwards in the backend to save the video

        axios.post("http://127.0.0.1:5000/videos/", formData, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
        }).then(response => {
          console.log(response)
          alert("Video uploaded successfully!");        
          // setTitle("");
          // setDescription("");
          // setTags("");
          // setFile(null);
          // setImgFile(null);
          // // Redirect the user to the video page
          // history.push(`/video/${videoId}`);
          
      }).catch (error => {
        console.error(error);
        alert("Error! The title of the video already exists.");
    });
  };

  return (
    <div className="container">
      <h1>Upload a Video</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated)</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            value={tags}
            onChange={handleTagsChange}
            required
          />
        </div>
        <br/>

        <div className="form-group">
          <label htmlFor="video" >Upload Video</label>
          <input
            type="file"
            className="form-control-file"
            id="video"
            name="video-file"
            accept=".mp4,.mov,.avi,.mkv,.webm,.ogg"
            onChange={handleFileChange}
            max="50000000"
            required
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="imagee" >Upload Thumbnail</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            name="image-file"
            accept=".jpg,.jpeg,.png,.gif"
            size="1000000"
            onChange={handleImgFileChange}
            required
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">
          Upload Video
        </button>
      </form>
    </div>
  );
};

export default VideoUpload;
