import React, { useEffect, useRef } from 'react';
import './Videoplayer.css';
import video from '../../assets/college-video.mp4';
import closeIcon from '../../assets/close-icon.svg'; // You'll need to add a close icon image

const Videoplayer = ({ playState, setPlayState }) => {
  const videoRef = useRef(null);
  const videoPlayerRef = useRef(null);

  const closeVideo = () => {
    setPlayState(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    // Play the video when playState is true
    if (playState && videoRef.current) {
      videoRef.current.play();
    }

    // Handle clicks outside the video player to stop the video
    const handleClickOutside = (event) => {
      if (videoPlayerRef.current && !videoPlayerRef.current.contains(event.target)) {
        closeVideo();
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [playState, setPlayState]);

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={videoPlayerRef}>
      <img 
        src={closeIcon} 
        alt="Close" 
        className="video-close-btn" 
        onClick={closeVideo}
      />
      <video ref={videoRef} src={video} autoPlay muted controls />
    </div>
  );
};

export default Videoplayer;