import React from 'react';
import YoutubeEmbed from '../YoutubeEmbeded';
import NavBar from '../components/NavBar';

export default function Trailer() {
  return (
    <div className="fancyBackground">
      <NavBar />
      <div> Cf? Uita-te si tu la trailer</div>
      <div className="trailerVideo">
        <YoutubeEmbed className="smth" embedId="4EHbt_kSkG8" />
      </div>
    </div>
  );
}
