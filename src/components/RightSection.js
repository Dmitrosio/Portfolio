import React from 'react';
import DVD from './DVD.jpg';
import GIF from './load.gif';

const RightSection = ({ videoUrl, showGif }) => {
  return (
    <div className="right-section">
            {showGif ? (
        <img src={GIF} alt="GIF" className='gif-image'/>
      ) : (
        videoUrl && (
          <div>
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
