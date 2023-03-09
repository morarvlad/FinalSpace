import React from 'react';

export default function RandomCharacterGetter({ data }) {
  return (
    <>
      <div className="card-find" key={data.id}>
        <p className="card-text"> Your Character is:</p>
        <img src={data.img_url} alt={data.name} />
        <div>{data.name}</div>
      </div>
      <div>
        <a
          href={`https://final-space.fandom.com/wiki/${data.name}`}
          target="_blank"
          rel="external noreferrer"
        >
          <button className="opensFS red"> wiki. </button>
        </a>
      </div>
    </>
  );
}
