const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const Video = require('../models/video.model');
var path = require('path');
var fs = require('fs');
// const thumbsupply = require('thumbsupply'); // to generate thumbnails for the videos being uploaded

const thumbnailTargetDir = "C:/Users/AMAN/Desktop/Files_Shortcuts/NIT AP/3rd year sem 2/Web Development/Website Code/my-app/backend/routes/thumbnails";

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the upload directory
    const uploadDir = path.join(__dirname, '../../backend/routes/uploads');
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

// Define the file filter to accept only mp4 files
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'video/mp4') {
//     cb(null, true);
//   } else {
//     cb(new Error('Invalid file type. Only MP4 files are allowed.'), false);
//   }
// };

// Set up multer upload
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 100 // Set the maximum file size to 100 MB
  },
  // fileFilter: fileFilter
});


// router.route('/test').get((req, res) => {
      
//   const videoFilePath = "C:/Users/AMAN/Desktop/Files_Shortcuts/NIT AP/3rd year sem 2/Web Development/Website Code/my-app/backend/uploads/1681148262781-702738289.mp4";
//   const thumbnailPath = "C:/Users/AMAN/Desktop/Files_Shortcuts/NIT AP/3rd year sem 2/Web Development/Website Code/my-app/backend/thumbnails/1681148262781-702738289.png";
  
//   thumbsupply.generateThumbnail(videoFilePath, {
//     size: thumbsupply.ThumbSize.LARGE, // or ThumbSize.LARGE
//     timestamp: "10%", // or `30` for 30 seconds
//     forceCreate: true,
//     cacheDir: "~/cache",
//     mimetype: "video/mp4"
//   })
//   .then((thumbnail) => {
//     fs.writeFile(thumbnailPath, thumbnail, (err) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({msg: "Failed to save thumbnail"});
//         return;
//       } else {
//         console.log("Thumbnail saved successfully");
//         res.status(200).json({msg: "Thumbnail saved successfully"});
//         return;
//       }
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//     res.status(501).json({msg: "Some error encountered"});
//   });
// });


router.route('/').post(upload.array('file', 2), (req, res) => {
  // console.log("inside the post request upload video");
  const title = req.body.title;
  const description = req.body.description;
  const tags = req.body.tags.split(',');
  const videoFilePath = req.files[0].path;
  const thumbnailFilePath = req.files[1].path;
  // console.log(videoFilePath);
  // console.log(thumbnailFilePath);
  

  const videoFileName = (videoFilePath.split("\\").slice(-1))[0];
  console.log(videoFileName);
  

  const thumbnailFileName = (thumbnailFilePath.split("\\").slice(-1))[0];
  console.log(thumbnailFileName);
  
  const newVideo = new Video({title, description, tags, videoFilePath:videoFileName, thumbnailFilePath:thumbnailFileName});
  // save only the filenames in the database

  const thumbnailTargetPath = thumbnailTargetDir + "/" + thumbnailFileName;

  newVideo.save()
      .then(() => {
          console.log("Video added!");
          // Save the thumbnail file
          const writeStream = fs.createWriteStream(thumbnailTargetPath); // target
          // console.log(thumbnailTargetPath);
          // Pipe the PNG file stream to the write stream to save it to the target directory
          const readStream = fs.createReadStream(thumbnailFilePath); // source 

          readStream.pipe(writeStream);

          readStream.on('close', () => {
            fs.unlinkSync(thumbnailFilePath); // Delete the temporary file
            console.log('Thumbnail image-file saved successfully!');
            // console.log('File saved successfully');
          });
        
          writeStream.on('error', (err) => {
            console.error(err);
          });

          // Respond with a success message
          res.send('Video and thumbnail files saved on the server, successfully!');

      })
        .catch(err => res.status(400).json("Error: " + err));

});


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

  Video.find({ $or: [{ title: title }, { tags: { $in: tags?.split(",") } }] }) // OR query
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
