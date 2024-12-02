import React from 'react';
import { FaInstagram, FaFacebook, FaBars } from 'react-icons/fa';
import "../css/Icons.css";

const Icons = ({ toggleMenu }) => {
  return (
    <div className="menu-icons">
      <FaInstagram 
        className="icon instagram" 
        onClick={() => window.open('https://www.instagram.com/zedyaloic/', '_blank')} 
      />
      <FaFacebook 
        className="icon facebook" 
        onClick={() => window.open('https://www.facebook.com/zedya.loic', '_blank')} 
      />
      <FaBars className="icon menu-icon" onClick={toggleMenu} />
    </div>
  );
};

export default Icons;