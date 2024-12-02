import React, { useState } from 'react';
import Icons from "../components/Icons";
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // Empêcher le comportement par défaut du lien
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Zedya</div>
      </nav>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className={`side-menu ${menuOpen ? 'show' : ''}`}>
        <h2>Menu</h2>
        <ul>
          <li>
            <a href="#" onClick={(e) => handleLinkClick(e, 'presentation-container')}>Présentation</a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleLinkClick(e, 'projets')}>Portfolio</a>
          </li>
          <li>
            <a href="#" onClick={() => window.open('https://www.instagram.com/zedyaloic/', '_blank')}>Contact</a>
          </li>
        </ul>
      </div>

      <Icons toggleMenu={toggleMenu} /> {/* Afficher le composant Icons en bas à droite */}
    </>
  );
};

export default Navbar;