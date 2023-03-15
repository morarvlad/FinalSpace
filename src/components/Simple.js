import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import classes from '../styles/tinder.module.css';

export default function Simple() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/character?limit=5&sort=desc')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setArray(
          data.map(character => {
            return {
              id: character.id,
              name: character.name,
              origin: character.origin,
            };
          })
        );
      });
  }, []);

  const [lastDirection, setLastDirection] = useState();

  const [array, setArray] = useState([]);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
    setArray(
      array.filter(({ name }) =>
        direction === 'right' ? name !== nameToDelete : true
      )
    );
  };

  const outOfFrame = name => {
    // console.log(name + ' left the screen!');
  };

  return (
    <div className={classes.tinder_div}>
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <div className="sideTitle">
        <span>Who can remain on the Ship?</span>
      </div>
      <div className={classes.cardContainer_tinder}>
        {data.map(character => (
          <TinderCard
            className={classes.swipe}
            key={character.name}
            preventSwipe={['up', 'down']}
            onSwipe={dir => {
              swiped(dir, character.name);
            }}
            onCardLeftScreen={() => {
              outOfFrame(character.name);
            }}
          >
            <div
              style={{ backgroundImage: 'url(' + character.img_url + ')' }}
              className={classes.card_tinder}
            >
              <h4 className={classes.title}>{character.name}</h4>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="arrayTinder">
        <h2 className="arrayTitle"> Still On Board:</h2>
        {array.map(character => (
          <div key={character.id}>
            <h2>Name: {character.name}</h2>
            <h4>Origin: {character.origin}</h4>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
