import React from 'react';
import CD1 from './CD-1.jpg';
import CD2 from './CD-2.jpg';
import CD3 from './CD-3.jpg';
import CD4 from './CD-4.png';
import GIF from './load.gif';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";


const LeftSection = ({ playVideo, showGif, setShowGif }) => {
  const handlePlayVideo = (url) => {
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
      playVideo(url);
    }, 1000); // Adjust the duration (in milliseconds) for showing the GIF
  };

  const imageUrls = [
    { imageUrl: CD4, videoUrl: 'https://www.youtube.com/embed/WYpwrA3ZAhM?si=aAWeZacflFBfH_Ci', title: "AI Assistant", description: "This is an AI assistant I have created working for Grab The Axe: Total Security Solutions. I have used React Native, Whisper API and Chat GPT3 locally. "},
    { imageUrl: CD1, videoUrl: 'https://www.youtube.com/embed/D0uWxfvvEPo?si=0H7brsmpSY6h9JsD', title: "To Do List Application", description: "This application creates a To Do List in applicaiton using Java."  },
    { imageUrl: CD2, videoUrl: 'https://www.youtube.com/embed/KcRdAAi4cSA?si=s2ykhYH4mfTfwNPy', title: "Poker Hand Classification", description: "This application creates an AI model that creates description of what's going on on the screen."},  
    { imageUrl: CD3, videoUrl: 'https://www.youtube.com/embed/2yWSaMkhvzA?si=KQiMnuz0sINwqN3U', title: "Image Caption CNN", description: "This applicaiton classifies the hand of the chosen cards. "},
    // Add more image and video URL pairs here
  ];

  return (
    <div className="left-section">
      <ul className="image-list">
        {imageUrls.map((item, index) => (
          <li key={index}>
            <motion .img
              whileHover={{scale: 1.1}}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              src={item.imageUrl}
              alt="Click to play video"
              onClick={() => handlePlayVideo(item.videoUrl)} 
            />
            <p key={index}>About: {item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSection;
