import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const API_KEY = 'AIzaSyCeoJ1lVSmi4pEIt7r6cVWMDrpBzbKCkNE';
    const CHANNEL_ID = 'UCxSkHS5Wa-PHuzORRppIj_A';
    // Make a request to the YouTube Data API to fetch video data
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&maxResults=10`)
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-item">
          <iframe
            title={video.snippet.title}
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allowFullScreen
          />
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
