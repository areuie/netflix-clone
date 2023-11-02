const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnailPic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  videoURL: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;