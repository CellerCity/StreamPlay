import React, { useState } from "react";
import axios from "axios";


const VideoUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", tags);
    formData.append("awesome-file", file); 
    // awesome-file corresponds to name of the input-field that is useful afterwards in the backend to save the video

        axios.post("http://127.0.0.1:5000/videos/", formData, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
        }).then(response => {
          console.log(response)
          alert("Video uploaded successfully!");        
          setTitle("");
          setDescription("");
          setTags("");
          setFile(null);
          // // Redirect the user to the video page
          // history.push(`/video/${videoId}`);
          
      }).catch (error => {
        console.error(error);
        alert("Error uploading video ?>J 😒.");
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
        <div className="form-group">
          <label htmlFor="video" >Video</label>
          <input
            type="file"
            className="form-control-file"
            id="video"
            name="awesome-file"
            accept="video/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Upload Video
        </button>
      </form>
    </div>
  );
};

export default VideoUpload;
