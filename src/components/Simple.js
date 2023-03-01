import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import TinderLike from '../components/TinderLike';
import '../styles/tinder.css';
// const db = [
//   {
//     name: 'George',
//     url: './img/richard.jpg',
//   },
//   {
//     name: 'Erlich Bachman',
//     url: './img/erlich.jpg',
//   },
//   {
//     name: 'Monica Hall',
//     url: './img/monica.jpg',
//   },
//   {
//     name: 'Jared Dunn',
//     url: './img/jared.jpg',
//   },
//   {
//     name: 'Dinesh Chugtai',
//     url: './img/dinesh.jpg',
//   },
// ];

function Simple() {
  // const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = name => {
    console.log(name + ' left the screen!');
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/character?limit=5')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="tinder-div">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1>Good or Evil</h1>
      <div className="cardContainer-tinder">
        {data.map(character => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={dir => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.img_url + ')' }}
              className="card-tinder"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default Simple;
