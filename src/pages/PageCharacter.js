import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SpecificCharacterGetter from '../components/SpecificCharacterGetter';
import NavBar from '../components/NavBar';

export default function PageCharacter({ page }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://finalspaceapi.com/api/v0/character/${page}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [page]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const goNext = () => {
    navigate(`/${page}`);
  };
  return (
    <>
      <div className="fancyBackground">
        <NavBar />
        <button className="backButton" onClick={goBack}>
          Go Back
        </button>
        <SpecificCharacterGetter data={data} />
        <button onClick={goNext}>Go To Character Wiki</button>
      </div>
    </>
  );
}
