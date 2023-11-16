import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const MyCarousel = ({ images }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create an array to store promises for each image load
    const imageLoadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    // Wait for all image promises to resolve
    Promise.all(imageLoadPromises)
      .then(() => {
        // All images have loaded successfully
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors if any image fails to load
        console.error('Error loading images:', error);
        setLoading(false);
      });
  }, [images]);

  if (loading) {
    return (
      <div
        style={{
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
        }}
      >
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <Carousel animation="slide">
      {images.map((image, index) => (
        <Paper key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: 'auto' }}
          />
        </Paper>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
