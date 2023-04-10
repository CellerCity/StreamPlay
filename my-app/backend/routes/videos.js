const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const Video = require('../models/video.model');
var path = require('path');
var fs = require('fs');

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the upload directory
    const uploadDir = path.join(__dirname, '../../backend/uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Generate a unique filename
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    // assigning a filename to the uploaded file
    cb(null, filename);
  }
});

// const upload = multer({ storage });
// Define the file filter to accept only mp4 files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'video/mp4') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only MP4 files are allowed.'), false);
  }
};

// Set up multer upload
const upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 100 // Set the maximum file size to 100 MB
  // },
  // fileFilter: fileFilter
});


router.route('/test').post((req, res) => {
  res.status(200).send({msg: "inside the post handler for test"});
});

router.route('/').post(upload.single('awesome-file'), (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const tags = req.body.tags;
  const videoFilePath = req.file.path;
  // res.status(200).send({msg: "OKKKL"});
  
  
  // const tempFile = req.file;
  // const dataCollected = [title, description, tags, tempFile];
  // res.status(200).send(dataCollected);


  const newVideo = new Video({title, description, tags, videoFilePath});

  newVideo.save()
      .then(() => res.json("Video added!"))
      .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
