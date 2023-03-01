import React, { useState, useEffect } from 'react';
import CharacterGetter from '../components/CharacterGetter';
import TimeWarp from '../assets/TimeWarp.mp4';
import HeadVideo from '../assets/HeadVideo.mp4';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function Home() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/character?limit=12')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      {loading ? (
        <video src={TimeWarp} autoPlay loop muted />
      ) : (
        <div className="fancyBackground">
          <NavBar />
          <div className="main-content">
            <CharacterGetter data={data} />
            <div className="homeWrapper insertedVideo">
              <div className="landingDivInserted">
                <div className="overlay  "></div>
                <video className="videoH" src={HeadVideo} autoPlay loop muted />
                <div className="landingContent landingContentHome">
                  <span className="trailerLink">
                    If You End Up Liking The Trailer Video check out the full
                    searies by pressing the button bellow.
                  </span>
                  <div>
                    <a
                      href="https://www.netflix.com/ro-en/title/80174479"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="opensFS"></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
