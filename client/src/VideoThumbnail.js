import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function VideoThumbnail({ title, thumbnailURL, videoURL }) {
  return (
    <Card>
      <a href={videoURL} target="_blank" rel="noopener noreferrer">
        <CardMedia component="img" alt={title} height="200" image={thumbnailURL} />
      </a>
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default VideoThumbnail;
