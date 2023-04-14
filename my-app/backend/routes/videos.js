const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const Video = require('../models/video.model');
var path = require('path');
var fs = require('fs');

// Check file types and size for video
const videoFileFilter = (req, file, cb) => {
  const allowedVideoMimeTypes = ['video/mp4', 'video/mov', 'video/mov', 'video/avi', 
  'video/mkv', 'video/webm', 'video/ogg'];
  // console.log(file); 
  if (allowedVideoMimeTypes.includes(file.mimetype)){
    cb(null, true);
  } else {
    // console.log(file);
    cb(new Error('Invalid file type or size'));
  }
};

// Check file types and size for image
const imageFileFilter = (req, file, cb) => {
  const allowedImageMimeTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
  // console.log(file);
  if (allowedImageMimeTypes.includes(file.mimetype)){
    cb(null, true);
  } else {
    // console.log(file);
    cb(new Error('Invalid file type or size'));
  }
};

const limits = {
  fileSize: (req, file, cb) => {
    if (file.fieldname === 'video-file') {
      cb(null, 1024 * 1024 * 50); // 50 MB for video files
    } else if (file.fieldname === 'image-file') {
      cb(null, 1024 * 1024 * 10); // 10 MB for image files
    } else {
      cb(new Error('Invalid field name'));
    }
  }
};

// Set up multer.fields() to apply different fileFilters and storage locations
const upload = multer({
  storage: multer.diskStorage({
    // This function determines which storage engine to use based on the file type
    destination: (req, file, cb) => {
      if (file.fieldname === 'video-file') {
        // videoFileFilter(req, file, cb);
        const uploadVideoDir = path.join(__dirname, '../../backend/routes/uploads');
        if (!fs.existsSync(uploadVideoDir)) {
          fs.mkdirSync(uploadVideoDir);
        }
        cb(null, uploadVideoDir);
      } else if (file.fieldname === 'image-file') {
        // imageFileFilter(req, file, cb);
        const uploadImgDir = path.join(__dirname, '../../backend/routes/thumbnails');
        if (!fs.existsSync(uploadImgDir)) {
          fs.mkdirSync(uploadImgDir);
        }
        cb(null, uploadImgDir);
      } else {
        cb(new Error('Invalid field name'));
      }
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
      // assigning a filename to the uploaded file
      cb(null, filename);
    }
  }),
  fileFilter: function (req, file, cb) {
    if (file.fieldname === 'video-file') {
      videoFileFilter(req, file, cb);
    } else if (file.fieldname === 'image-file') {
      imageFileFilter(req, file, cb);
    } else {
      cb(new Error('Invalid field name'));
    }
  },
  limits: limits // Maximum size of files: 20MB
}).fields([
  { name: 'video-file', maxCount: 1 },
  { name: 'image-file', maxCount: 1 }
]);


// API endpoint to upload video and image
router.post('/', (req, res) => {
  console.log("Inside the post function");
  
  upload(req, res, (err) => {
  if (err) {  
    return res.status(400).json({ error: err.message });
  }
  
  // Both files uploaded successfully
  console.log("Files uploaded successfully");

  const title = req.body?.title;
  const description = req.body?.description;
  const tags = req.body?.tags?.split(',');
  const videoFilePath = req.files['video-file'][0]?.path;
  const thumbnailFilePath = req.files['image-file'][0]?.path;

  // console.log(title);
  // console.log(description);
  // console.log(tags);
  // console.log(videoFilePath);
  // console.log(thumbnailFilePath);
  
  const videoFileName = (videoFilePath.split("\\").slice(-1))[0];
  // console.log(videoFileName);

  const thumbnailFileName = (thumbnailFilePath.split("\\").slice(-1))[0];
  // console.log(thumbnailFileName);

  // Saving the information to the database after
  // checking if the title is not already in the database

  let existingTitle = false; // initially assuming that the title is unique
  Video.findOne({ title: title }).then((vid) => {
    if(vid){
      existingTitle = true;
      console.log(existingTitle);
      if (existingTitle) {
        // Delete the uploaded files
        fs.unlinkSync(videoFilePath);
        fs.unlinkSync(thumbnailFilePath);
        console.log("Deleted uploaded files due to duplicate title!");
        return res.status(400).json({ error: "Title already exists." });
      }
    }
    else{
      const newVideo = new Video({title, description, tags, videoFilePath:videoFileName, thumbnailFilePath:thumbnailFileName});
      // save only the filenames in the database
      newVideo.save()
      .then(() => {
          console.log("Information added to the database.");
          // Respond with a success message
          res.send('Files uploaded & db updated, successfully!');
      })
      .catch(err => {
        console.log("The information could not be stored in the db")
        res.status(400).json("Error: " + err)
      });
    }
  });
 
  }); 
}
);


router.route("/search").get((req, res) => {
  // returns all videos with either the given title or tag(s)
  const title = req?.query?.title;
  const tags = req?.query?.tags;

  // let query = {};
  // if (title) {
  //   query.title = { $regex: title, $options: "i" };
  // }
  // if (tags) {
  //   query.tags = { $in: tags.split(",") };
  // }
  // Video.find(query) // AND query
   // .then((videos) => res.json(videos))
   // .catch((err) => res.status(400).json("Error: " + err));

  const tagList = (tags?.split(",")).map(str => str.replace(/\s/g, '').replace(/,{2,}/g, ','));
  // removing extra spaces and replaces multiple commas with single commas
  // console.log(tagList);

  Video.find({ $or: [
    { title: { $regex: title, $options: "i" } }, 
  { tags: { $in: tagList.map(tag => new RegExp(tag, "i")) 
} }
    // 'i' to search irrespective of the case
] }) // OR query (case insensitive search)
  .then((videos) => {
    // console.log(videos);
    res.json(videos);
  })
  .catch((error) => {
    // console.log(error);
    res.status(400).json("Error: " + err)
  });
  
});

router.route('/display_vid/:vidName').get( (req, res) => {
  const vidName = req?.params?.vidName;
  // const tmpAbsPhotoPath = path.join(__dirname, "uploads","1681190586220-564668799.mp4");
  const tmpAbsVideoPath = path.join(__dirname, "uploads", vidName);
  // console.log(tmpAbsVideoPath);
  res.sendFile(tmpAbsVideoPath);
});


router.route('/display_thumb/:thumbnailName').get( (req, res) => {
  const thumbnailName = req?.params?.thumbnailName;
  // const tmpAbsPhotoPath = path.join(__dirname, "thumbnails","1681190586272-594831730.jpg");
  const tmpAbsThumbnailPath = path.join(__dirname, "thumbnails", thumbnailName);
  // console.log(tmpAbsThumbnailPath);
  res.sendFile(tmpAbsThumbnailPath);
});

module.exports = router;
