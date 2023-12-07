import React, { useState } from 'react';
import './ImageVideoPlayer.css'; // Import your CSS for styling

const ImageVideoPlayer = ({ gifSrc, videoSrc }) => {
  const [showGif, setShowGif] = useState(true);

  const handleImageClick = () => {
    // Toggle between GIF and video
    setShowGif(!showGif);
  };

  return (
    <div className="image-video-player">
      {showGif && (
        <img src={gifSrc} alt="GIF" onClick={handleImageClick} />
      )}
      {!showGif && (
        <video src={videoSrc} controls autoPlay onClick={handleImageClick}></video>
      )}
    </div>
  );
};

export default ImageVideoPlayer;
