import React, { useState, useEffect } from 'react';
import RandomCharacterGetter from '../components/RandomCharacterGetter';
import NavBar from '../components/NavBar';

export default function RandomCharacter() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch(`https://finalspaceapi.com/api/v0/character/1`)
  //     .then(res => res.json())
  //     .then(data => setData(data));
  // }, []);

  const getData = number => {
    fetch(`https://finalspaceapi.com/api/v0/character/${number}`)
      .then(res => res.json())
      .then(data => setData(data));
  };

  return (
    <div className="fancyBackground">
      <NavBar />
      <div className="randomContainer">
        <input type="text"></input>
        <button
          className="getButton"
          onClick={() => getData(Math.floor(Math.random() * 47 + 1))}
        >
          Get Character
        </button>
        {data && <RandomCharacterGetter data={data} />}
      </div>
    </div>
  );
}
