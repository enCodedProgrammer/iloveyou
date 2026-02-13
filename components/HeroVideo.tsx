import React from "react";
import "./HeroVideo.css";
import Video from "../images/bg-video.mp4"

const HeroVideo = () => {
  return (
    <section className="hero-video">
      <video
        className="background-video"
        src={Video}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="hero-content">
        <p>You make me better and I bless God for the day you came my way💖</p>
      </div>
    </section>
  );
};

export default HeroVideo;
