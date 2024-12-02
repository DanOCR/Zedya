

import React from 'react';
import '../css/Presentation.css';
import Zedya from '../images/Zedya.jpg';

const Presentation = () => {
  return (
    <div id="presentation-container" className="presentation-container">
      <div className="neon-line top-line"></div>
      <div className="image-section">
        <img src={Zedya} alt="Zedya" className="zedya-image" />
      </div>
      <div className="text-section">
        <h1 className="title">Zedya</h1>
        <p className="description">
          Zedya est un artiste graffeur passionné, fusionnant créativité et innovation. Son travail reflète une vision unique de l'art urbain, où chaque spray de peinture raconte une histoire. Inspiré par la culture street art, Zedya crée des œuvres vibrantes qui capturent l'essence de la ville et de ses habitants. Avec un style distinctif, il repousse les limites de la créativité et invite le public à explorer de nouvelles dimensions artistiques.
        </p>
      </div>
      <div className="neon-line bottom-line"></div>
    </div>
  );
};

export default Presentation;