import React from 'react';

const TVScreen = ({ videoUrl }) => {
  return (
    <div className="tv-screen">
      <iframe
        width="560"
        height="300"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TVScreen;
