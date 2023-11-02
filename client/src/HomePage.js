import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import VideoThumbnail from './VideoThumbnail';

import ReactPlayer from 'react-player';

import video1 from './video1.jpg'; 
import video2 from './video2.jpg'; 
import video3 from './video3.jpg'; 

function HomePage() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const videos = [
    { id: 1, title: 'Video 1', thumbnailURL: video1, videoURL: 'https://www.example.com/video1.mp4'},
    { id: 2, title: 'Video 2', thumbnailURL: video2, videoURL: 'https://www.example.com/video1.mp4'},
    { id: 3, title: 'Video 3', thumbnailURL: video3, videoURL: 'https://www.example.com/video1.mp4'},
    { id: 4, title: 'Video 1', thumbnailURL: video1, videoURL: 'https://www.example.com/video1.mp4'},
    { id: 5, title: 'Video 2', thumbnailURL: video2, videoURL: 'https://www.example.com/video1.mp4'},
    { id: 6, title: 'Video 3', thumbnailURL: video3, videoURL: 'https://www.example.com/video1.mp4'},
  ];

  return (
    <div>
      <Typography variant="h4">Welcome to the Video Carousel</Typography>

      <Typography variant="h6">Featured Videos</Typography>
      <Slider {...carouselSettings}>
        {videos.map((video) => (
          <div key={video.id}>
            <VideoThumbnail title={video.title} thumbnailURL={video.thumbnailURL} videoURL={video.videoURL}/>
          </div>
        ))}
      </Slider>

      <Typography variant="h6">More Videos</Typography>
      <Grid container spacing={2}>
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
            <VideoThumbnail title={video.title} thumbnailURL={video.thumbnailURL} videoURL={video.videoURL} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;
