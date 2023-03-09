import React from 'react';
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
      <Route
        path="Home/Quatronostro Menendez"
        element={<PageCharacter page={13} />}
      />
      <Route path="Home/Lord Commander" element={<PageCharacter page={14} />} />
      <Route
        path="Home/ Sheryl Goodspeed"
        element={<PageCharacter page={15} />}
      />
      <Route path="Home/Bolo" element={<PageCharacter page={16} />} />
      <Route path="Home/Invictus" element={<PageCharacter page={17} />} />
      <Route
        path="Home/Gary Goodspeed (Nightfall's timeline)"
        element={<PageCharacter page={18} />}
      />
      <Route path="Home/Nightfall" element={<PageCharacter page={19} />} />
      <Route path="Home/John Goodspeed" element={<PageCharacter page={20} />} />
      <Route path="Home/A.V.A" element={<PageCharacter page={21} />} />
      <Route path="Home/Evra" element={<PageCharacter page={22} />} />
      <Route
        path="Home/Queen of Ventrexia"
        element={<PageCharacter page={23} />}
      />
      <Route
        path="Home/King of Ventrexia"
        element={<PageCharacter page={24} />}
      />
      <Route path="Home/Mega-KVN" element={<PageCharacter page={25} />} />
      <Route path="Home/Gatekeeper" element={<PageCharacter page={26} />} />
      <Route
        path="Home/Melanie Dewinter"
        element={<PageCharacter page={27} />}
      />
      <Route path="Home/Harp Graven" element={<PageCharacter page={28} />} />
      <Route
        path="Home/ Shannon Thunder"
        element={<PageCharacter page={29} />}
      />
      <Route path="Home/Chuck" element={<PageCharacter page={30} />} />
      <Route path="Home/Septim" element={<PageCharacter page={31} />} />
      <Route path="Home/Fraskenhaur" element={<PageCharacter page={32} />} />
      <Route path="Home/Dartrichio" element={<PageCharacter page={33} />} />
      <Route path="Home/David Dewinter" element={<PageCharacter page={34} />} />
      <Route
        path="Home/General Cataloupe"
        element={<PageCharacter page={35} />}
      />
      <Route path="Home/Jeff" element={<PageCharacter page={36} />} />
      <Route path="Home/Meowlapeño" element={<PageCharacter page={37} />} />
      <Route path="Home/Oreskis" element={<PageCharacter page={38} />} />
      <Route path="Home/Sal" element={<PageCharacter page={39} />} />
      <Route path="Home/Terk" element={<PageCharacter page={40} />} />
      <Route path="Home/The Blade" element={<PageCharacter page={41} />} />
      <Route path="Home/Thud" element={<PageCharacter page={42} />} />
      <Route
        path="Home/Time Swap Sammy"
        element={<PageCharacter page={43} />}
      />
      <Route path="Home/Todd H. Watson" element={<PageCharacter page={44} />} />
      <Route path="Home/Viro" element={<PageCharacter page={45} />} />
      <Route path="Home/Werthrent" element={<PageCharacter page={46} />} />
      <Route
        path="Home/Zargon Tukalishi"
        element={<PageCharacter page={47} />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
