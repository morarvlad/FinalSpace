import React, { useState, useEffect } from 'react';
import CharacterGetter from '../components/CharacterGetter';
import TimeWarp from '../assets/TimeWarp.mp4';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function Home() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/character?limit=47')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <>
      {loading ? (
        <video src={TimeWarp} autoPlay loop muted />
      ) : (
        <div className="fancyBackground">
          <NavBar />
          <div className="main-content">
            <CharacterGetter data={data} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
