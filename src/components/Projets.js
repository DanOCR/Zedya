import React, { useState } from 'react';
import "../css/Projets.css";

import Space1 from "../images/Decors/Space/1.jpg";
import Space2 from "../images/Decors/Space/2.jpg";
import Space3 from "../images/Decors/Space/3.jpg";
import Space4 from "../images/Decors/Space/4.jpg";
import Space5 from "../images/Decors/Space/5.jpg";
import Space6 from "../images/Decors/Space/6.jpg";
import Space7 from "../images/Decors/Space/7.jpg";
import Space8 from "../images/Decors/Space/8.jpg";

import Clock1 from "../images/Decors/Clock/1.jpg";
import Clock2 from "../images/Decors/Clock/2.jpg";
import Clock3 from "../images/Decors/Clock/3.jpg";
import Clock4 from "../images/Decors/Clock/4.jpg";
import Clock5 from "../images/Decors/Clock/5.jpg";
import Clock6 from "../images/Decors/Clock/6.jpg";
import Clock7 from "../images/Decors/Clock/7.jpg";
import Clock8 from "../images/Decors/Clock/8.jpg";
import Clock9 from "../images/Decors/Clock/9.jpg";

import Saloon1 from "../images/Decors/Saloon/1.jpg";
import Saloon2 from "../images/Decors/Saloon/2.jpg";
import Saloon3 from "../images/Decors/Saloon/3.jpg";
import Saloon4 from "../images/Decors/Saloon/4.jpg";
import Saloon5 from "../images/Decors/Saloon/5.jpg";
import Saloon6 from "../images/Decors/Saloon/6.jpg";
import Saloon7 from "../images/Decors/Saloon/7.jpg";
import Saloon8 from "../images/Decors/Saloon/8.jpg";
import Saloon9 from "../images/Decors/Saloon/9.jpg";

import Haribo1 from "../images/Decors/Haribo/1.jpg";
import Haribo2 from "../images/Decors/Haribo/2.jpg";
import Haribo3 from "../images/Decors/Haribo/3.jpg";
import Haribo4 from "../images/Decors/Haribo/4.jpg";
import Haribo5 from "../images/Decors/Haribo/5.jpg";
import Haribo6 from "../images/Decors/Haribo/6.jpg";
import Haribo7 from "../images/Decors/Haribo/7.jpg";
import Haribo8 from "../images/Decors/Haribo/8.jpg";
import Haribo9 from "../images/Decors/Haribo/9.jpg";

import Golf1 from "../images/Decors/Golf/1.jpg";
import Golf2 from "../images/Decors/Golf/2.jpg";
import Golf3 from "../images/Decors/Golf/3.jpg";
import Golf4 from "../images/Decors/Golf/4.jpg";
import Golf5 from "../images/Decors/Golf/5.jpg";
import Golf6 from "../images/Decors/Golf/6.jpg";
import Golf7 from "../images/Decors/Golf/7.jpg";
import Golf8 from "../images/Decors/Golf/8.jpg";
import Golf9 from "../images/Decors/Golf/9.jpg";

import Graff1 from "../images/Graffiti/1.jpg";
import Graff2 from "../images/Graffiti/2.jpg";
import Graff3 from "../images/Graffiti/3.jpg";
import Graff4 from "../images/Graffiti/4.jpg";

// Données des projets avec catégories
const projects = [
  { id: 1, title: "Space", img: Space1, category: "Décors", images: [Space1, Space2, Space3, Space4, Space5, Space6, Space7, Space8] },
  { id: 2, title: "Projet 2", img: Graff1, category: "Graffiti", images: [Space2, Space3, Space4, Space5, Space6, Space7, Space8, Space1] },
  { id: 3, title: "Clock", img: Clock1, category: "Décors", images: [Clock1, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9] },
  { id: 4, title: "Projet 4", img: Graff2, category: "Graffiti", images: [Space1, Space2, Space3, Space4, Space5, Space6, Space7, Space8] },
  { id: 5, title: "Saloon", img: Saloon1, category: "Décors", images: [Saloon1, Saloon2, Saloon3, Saloon4, Saloon5, Saloon6, Saloon7, Saloon8, Saloon9] },
  { id: 6, title: "Projet 6", img: Graff3, category: "Graffiti", images: [Space1, Space2, Space3, Space4, Space5, Space6, Space7, Space8] },
  { id: 7, title: "Haribo", img: Haribo1, category: "Décors", images: [Haribo1, Haribo2, Haribo3, Haribo4, Haribo5, Haribo6, Haribo7, Haribo8, Haribo9] },
  { id: 8, title: "Projet 8", img: Graff4, category: "Graffiti", images: [Space1, Space2, Space3, Space4, Space5, Space6, Space7, Space8] },
  { id: 9, title: "Golf", img: Golf1, category: "Décors", images: [Golf1, Golf2, Golf3, Golf4, Golf5, Golf6, Golf7, Golf8, Golf9] },
];

const Projets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null); // Projet actif pour la modale
  const [filteredProjects, setFilteredProjects] = useState(projects); // Projets filtrés selon catégorie

  // Fonction pour ouvrir la modale avec un projet
  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null); // Réinitialiser le projet sélectionné
  };

  // Fonction pour filtrer les projets en fonction de la catégorie
  const filterProjects = (category) => {
    if (category === "Tous") {
      setFilteredProjects(projects); // Afficher tous les projets
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category)); // Filtrer par catégorie
    }
  };

  return (
    <div id="projets" className="projets-container">
      {/* Section des filtres */}
      <div className="filters">
        <button onClick={() => filterProjects("Tous")}>Tous</button>
        <button onClick={() => filterProjects("Décors")}>Décors</button>
        <button onClick={() => filterProjects("Graffiti")}>Graffiti</button>
      </div>

      {/* Grille des projets filtrés */}
      <div className="projets-list">
  {filteredProjects.map((project) => (
    <div
      key={project.id}
      className={`projet-item ${project.category === "Graffiti" ? "disabled" : ""}`} // Ajouter une classe 'disabled' pour les projets de catégorie "Graffiti"
      onClick={() => project.category !== "Graffiti" && openModal(project)} // Ne pas ouvrir la modale pour les projets de catégorie "Graffiti"
    >
      <img src={project.img} alt={project.title} />
    </div>
  ))}
</div>

      {/* Modale */}
      {isModalOpen && currentProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>X</button>
            <h2>{currentProject.title}</h2>
            <div className="modal-gallery">
              {currentProject.images.map((image, index) => (
                <img key={index} src={image} alt={`${currentProject.title} image ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projets;
