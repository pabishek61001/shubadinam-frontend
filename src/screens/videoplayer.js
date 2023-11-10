import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <video  width="100%" height="50%" className='videoPlayer' autoPlay>
        <source src={require("../videos/Janmadinam Final Intro Video.mp4")} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
