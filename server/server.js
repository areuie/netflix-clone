const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Video = require('./models/video');
const Image = require('./models/image');

const grid = require('gridfs-stream');
const path = require('path'); // Import the 'path' module

const fs = require('fs');

const dbURI =
  'mongodb+srv://areuie:Password@netflixclone.hjsaioo.mongodb.net/netflix-clone?retryWrites=true&w=majority';

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(app.listen(5000, () => {
    console.log('Server started on port 5000');
  }))
  .catch((err) => console.log(err));

// app.get('/api', (req, res) => {
//   res.send({ users: ['userOne', 'userTwo', 'userThree'] });
// });

// const connection = mongoose.connection;
// grid.mongo = mongoose.mongo;
// const gfs = grid(connection.db);

const image = new Image({
    data: fs.readFileSync('./video1.jpg'), // Replace with the image data buffer
    contentType: 'image/jpeg', // Specify the content type of the image
});

const newVideo = new Video({
    title: 'Demo New Video',
    thumbnailPic: image,
    videoURL: 'https://www.example.com/test-video.mp4',
  });
  
  // Save the new video to the database
  newVideo.save()
    .then((result) => {
      console.log('Test video saved to the database:', result);
    })
    .catch((err) => {
      console.error('Error saving test video:', err);
    });


// app.get('/add-video', async (req, res) => {
//     const image = new Image({
//       data: imageBuffer, // Replace with the actual image data
//       contentType: 'image/jpeg', // Set the content type accordingly
//     });
  
//     await image.save();
  
//     const video = new Video({
//       title: 'new video',
//       videoURL: 'https://www.example.com/video.mp4', // Replace with the actual video URL
//       thumbnailPic: image._id, // Reference to the saved image
//     });
  
//     video
//       .save()
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({ error: 'Error saving video' });
//       });
//   });
  

//   app.get('/image/:filename', (req, res) => {
//     gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//       if (!file || file.length === 0) {
//         return res.status(404).json({ error: 'No file found' });
//       }
  
//       if (file.contentType.includes('image')) {
//         const readstream = gfs.createReadStream(file.filename);
//         readstream.pipe(res);
//       } else {
//         res.status(404).json({ error: 'Not an image' });
//       }
//     });
//   });
  
