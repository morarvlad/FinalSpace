import React from 'react';
import Hole from '../assets/Hole404.mp4';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/Home');
  };

  return (
    <div className="landingDiv">
      <div className="overlay"></div>
      <video src={Hole} autoPlay loop muted />
      <div className="landingContent">
        <h2>Error 404</h2>
        <p>''Looks like you got lost in time.''</p>
        <br></br>
        <button className="reconfigure" onClick={goHome}>
          RECONFIGURE
        </button>
      </div>
    </div>
  );
}
