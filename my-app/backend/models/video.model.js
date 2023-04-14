const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: { 
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 250
  },
  tags: [{
     type: String,
     maxlength: 100
    }],
  videoFilePath: {
    type: String,
    required: true,
    unique: true
  },
  thumbnailFilePath: {
    type: String,
    required: true,
    unique: true
  }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
