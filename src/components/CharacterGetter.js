import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterGetter({ data }) {
  return (
    <div className="root">
      {data.map(character => (
        <div className="card" key={character.id}>
          <Link to={character.name}>
            <div className="card--image">
              <img src={character.img_url} alt={character.name} />{' '}
            </div>
            <div className="card--link">
              <div className="card--title">{character.name}</div>
              <div className="card--text">{character.species}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
