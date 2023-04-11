const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
  videoFilePath: { type: String, required: true, unique: true },
  thumbnailFilePath: {type: String, required: true, unique: true}
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
