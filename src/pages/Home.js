import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Projets from '../components/Projets';

const Home = () => {
  
  return (
    <>
        <Navbar />
        <Header />
        <Presentation />
        <Projets />
    </>
  );
};

export default Home;