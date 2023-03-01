import React from 'react';

export default function SpecificCharacterGetter({ data }) {
  return (
    <div className="layout">
      <div className="persons stats">
        Name: {data.name}, Status: {data.status}, Species: {data.species}
      </div>
      <div className="persons aliases">Aliases: "{data.alias?.join(', ')}"</div>
      <div className="persons origins">Origin: {data.origin}</div>
      <div className="persons abilities">
        Abilities: {data.abilities?.join(', ')}
      </div>
    </div>
  );
}
