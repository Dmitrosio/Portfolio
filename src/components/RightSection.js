import React from 'react';
import DVD from './DVD.jpg';
import GIF from './load.gif';

const RightSection = ({ videoUrl, showGif }) => {
  return (
    <div className="right-section">
      <p>This is the content on the right side of the screen.</p>
            {showGif ? (
        <img src={GIF} alt="GIF" className='gif-image'/>
      ) : (
        videoUrl && (
          <div>
            <h2>Watch the Video</h2>
            <iframe
              width="560"
              height="400"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )
      )}
    </div>
  );
};


export default RightSection;
