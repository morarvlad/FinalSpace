import React, { useState } from 'react';
import RandomCharacterGetter from '../components/RandomCharacterGetter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function RandomCharacter() {
  const [data, setData] = useState(null);

  const getData = number => {
    fetch(`https://finalspaceapi.com/api/v0/character/${number}`)
      .then(res => res.json())
      .then(data => setData(data));
  };

  return (
    <>
      <div className="fancyBackground fancyRandom">
        <NavBar />
        <div className="sideTitle">
          <span> Find out which Final Space character are you?</span>
        </div>
        <div className="randomContainer">
          <button
            className="getButton"
            onClick={() => getData(Math.floor(Math.random() * 47 + 1))}
          >
            Get Character
          </button>
          {data && <RandomCharacterGetter data={data} />}
        </div>
      </div>
      <Footer />
    </>
  );
}
