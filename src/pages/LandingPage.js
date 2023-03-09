import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nebula from '../assets/Nebula.mp4';

export default function LandingPage() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/Home');
  };

  return (
    <div className="landingDiv">
      <div className="overlay"></div>
      <video src={Nebula} autoPlay loop muted />
      <div className="landingContent">
        <h2>Welcome Traveler</h2>
        <p>Are you ready?</p>
        <button className="immerseButton" onClick={goHome}>
          IMMERSE!
        </button>
        <div className="credits">
          <span>by Vlad Morar</span>
        </div>
      </div>
    </div>
  );
}
