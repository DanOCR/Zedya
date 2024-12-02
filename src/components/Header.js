import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <h1>Street art</h1>
        <h2>Artiste graffeur et créateur d'escape</h2>
        <div className="buttons">
        <button onClick={() => document.getElementById('projets').scrollIntoView({ behavior: 'smooth' })}>Portfolio</button>
          <button onClick={() => window.open('https://www.instagram.com/zedyaloic/', '_blank')}>Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Header;