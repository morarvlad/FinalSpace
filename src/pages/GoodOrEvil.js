import React from 'react';
import NavBar from '../components/NavBar';
import Simple from '../components/Simple';
import Footer from '../components/Footer';

export default function GoodOrEvil() {
  return (
    <>
      <div className="fancyBackground fancyGoE">
        <NavBar />
        <div className="directionsContainer">
          <div className="directions good">
            <div className="directionsArrows left">{`<`}</div>
            {`O
          n
          /
          B
          o
          a
          r
          d
          `}
          </div>
          <div className="directions evil">
            <div className="directionsArrows right">{`>`}</div>
            {`
            I
          n
          t
          o
          /
          S
          p
          a
          c
          e
            `}
          </div>
        </div>
        <Simple />
        <h2 className="demo">*demo game</h2>
      </div>
      <Footer />
    </>
  );
}

// The Repo that was used to create this page is still in work so the code is sometimes unreliable when it comes to the swiping motions
