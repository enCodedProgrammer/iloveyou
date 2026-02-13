// SpotifyEmbed.jsx
import React from "react";
import "./Spotify.css"; // optional for styling

const SpotifyEmbed = () => {
  return (
    <section className="spotify-music">
      <iframe
        title="Carry You Home - Alex Warren"
        src="https://open.spotify.com/embed/track/4uzKAj0mIyYmyhsRRyPXaQ?utm_source=generator&autoplay=1"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowTransparency="true"
      ></iframe>
    </section>
  );
};

export default SpotifyEmbed;
