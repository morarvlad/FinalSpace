import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Simple from '../components/Simple';

export default function GoodOrEvil() {
  return (
    <div className="fancyBackground">
      <NavBar />
      <Simple />
    </div>
  );
}
