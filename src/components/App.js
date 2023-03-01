import React, { useState, useEffect, Component } from 'react';
import Home from '../pages/Home';
import '../styles/style.css';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import PageCharacter from '../pages/PageCharacter';
import LandingPage from '../pages/LandingPage';
import Trailer from '../pages/Trailer';
import RandomCharacter from '../pages/RandomCharacter';
import GoodOrEvil from '../pages/GoodOrEvil';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="Home" element={<Home />} />
      <Route path="Trailer" element={<Trailer />} />
      <Route path="RandomCharacter" element={<RandomCharacter />} />
      <Route path="GoodOrEvil" element={<GoodOrEvil />} />
      <Route path="Home/Gary Goodspeed" element={<PageCharacter page={1} />} />
      <Route path="Home/Mooncake" element={<PageCharacter page={2} />} />
      <Route path="Home/Quinn Ergon" element={<PageCharacter page={3} />} />
      <Route path="Home/Little Cato" element={<PageCharacter page={4} />} />
      <Route path="Home/Avocato" element={<PageCharacter page={5} />} />
      <Route path="Home/KVN" element={<PageCharacter page={6} />} />
      <Route path="Home/Ash Graven" element={<PageCharacter page={7} />} />
      <Route path="Home/Fox" element={<PageCharacter page={8} />} />
      <Route path="Home/H.U.E" element={<PageCharacter page={9} />} />
      <Route
        path="Home/Tribore Menendez"
        element={<PageCharacter page={10} />}
      />
      <Route path="Home/Clarence" element={<PageCharacter page={11} />} />
      <Route path="Home/Biskit" element={<PageCharacter page={12} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
