import { FaVolumeMute } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
import { useRef, useState } from "react";

import video from "../../assets/kwikTrade Vid.mp4";
import "./Hero.css";

function HeroSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <>
      <div className="video-wrapper">
        <video
          className="video"
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
        />

        <button onClick={toggleMute} className="soundbtn">
          {isMuted ? (
            <FaVolumeMute className="icon" />
          ) : (
            <GoUnmute className="icon" />
          )}
        </button>
      </div>
    </>
  );
}

export default HeroSection;
