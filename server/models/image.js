const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  data: Buffer, // Store the image data as a Buffer
  contentType: String, // Define the content type (e.g., 'image/jpeg')
}, { timestamps: true });

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
