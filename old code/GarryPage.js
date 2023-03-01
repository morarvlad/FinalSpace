import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SpecificCharacterGetter from '../SpecificCharacterGetter';

export default function GarryPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/character/1')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button onClick={goBack}>Go Back</button>
      <SpecificCharacterGetter data={data} />
      <img
        className="origin persons"
        src="https://finalspaceapi.com/api/location/image/earth.jpg"
        alt="404"
      />
    </>
  );
}
