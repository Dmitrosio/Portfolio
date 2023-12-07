import React, { useState } from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import './SplitScreen.css';

const SplitScreen = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [showGif, setShowGif] = useState(false); // Add this state variable

  const playVideo = (url) => {
    setVideoUrl(url);
  };

  return (
    <div className="split-screen">
      <LeftSection playVideo={playVideo} showGif={showGif} setShowGif={setShowGif} /> {/* Pass showGif and setShowGif */}
      <RightSection videoUrl={videoUrl} showGif={showGif} /> {/* Pass showGif */}
    </div>
  );
};

export default SplitScreen;
