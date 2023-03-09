import React from 'react';
import YoutubeEmbed from '../YoutubeEmbeded';
import NavBar from '../components/NavBar';
import HeadVideo from '../assets/HeadVideo.mp4';
import Footer from '../components/Footer';

export default function Trailer() {
  return (
    <div className="fancyBackground fancyTrailer">
      <NavBar />
      <div className="sideTitle">
        <span>
          <p>Here!</p>
          To help you get started in the marvelous Final Space universe get
          started by looking at the trailer!
        </span>
      </div>
      <div className="trailerVideo">
        <YoutubeEmbed className="smth" embedId="4EHbt_kSkG8" />
      </div>
      <div className="homeWrapper insertedVideo">
        <div className="landingDivInserted">
          <div className="overlay  "></div>
          <video className="videoH" src={HeadVideo} autoPlay loop muted />
          <div className="landingContent landingContentHome ">
            <span className="sideTitle small">Check out the full series!</span>
            <div>
              <a
                href="https://www.netflix.com/ro-en/title/80174479"
                target="_blank"
                rel="noreferrer"
              >
                <button className="opensFS small"> extra. </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
