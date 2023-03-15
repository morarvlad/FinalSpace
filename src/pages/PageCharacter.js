import React, { useState, useEffect } from 'react';
import SpecificCharacterGetter from '../components/SpecificCharacterGetter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function PageCharacter({ page }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://finalspaceapi.com/api/v0/character/${page}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [page]);

  return (
    <>
      <div className="fancyBackground">
        <NavBar />
        <div className="sideTitle titleCharacter">
          <h4>Character's Stats:</h4>
        </div>
        <SpecificCharacterGetter data={data} />
        <div className="randomContainer">
          <a
            href={`https://final-space.fandom.com/wiki/${data.name}`}
            target="_blank"
            rel="external noreferrer"
          >
            <button className="opensFS red"> wiki. </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
