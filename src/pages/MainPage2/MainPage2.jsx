import React, { useState } from 'react';
import './MainPage2.css';

// Import the image from the assets folder
import card1 from '../../assets/card-1.svg';
import card2 from '../../assets/card-2.svg';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function DeveloperMatches() {
  const navigate = useNavigate();
  const [matches] = useState([
    {
      id: 1,
      name: 'Mad_Coder',
      image: card1,
      technologies: ['ReactJS', 'MemStack'],
    },
    {
      id: 2,
      name: 'CodeMaster',
      image: card2,
      technologies: ['ReactJS', 'NodeJS'],
    },
    {
      id: 3,
      name: 'CodeGenius',
      image: card1,
      technologies: ['ReactJS', 'NodeJS'],
    },
    {
      id: 4,
      name: 'Innovator',
      image: card2,
      technologies: ['Java', 'Spring Boot'],
    },
    {
        id: 5,
        name: 'Mad_Coder',
        image: card1,
        technologies: ['ReactJS', 'MemStack'],
      },
      {
        id: 6,
        name: 'CodeMaster',
        image: card2,
        technologies: ['ReactJS', 'NodeJS'],
      },
      {
        id: 7,
        name: 'CodeGenius',
        image: card1,
        technologies: ['ReactJS', 'NodeJS'],
      },
      {
        id: 8,
        name: 'Innovator',
        image: card2,
        technologies: ['Java', 'Spring Boot'],
      },
  ]);

  const [explore] = useState([
    {
      id: 1,
      name: 'TechWiz',
      image: card1,
      technologies: ['Blockchain', 'Ethereum'],
      achievement: "Winner of Hackathon 2022",
    },
    {
      id: 2,
      name: 'DevChamp',
      image: card2,
      technologies: ['React', 'NodeJS'],
      achievement: "Winner of CodeFest 2023",
    },
    {
        id: 3,
        name: 'Mad_Coder',
        image: card1,
        technologies: ['ReactJS', 'MemStack'],
        achievement: "Winner of Hackathon 2022",
      },
      {
        id: 4,
        name: 'CodeMaster',
        image: card2,
        technologies: ['ReactJS', 'NodeJS'],
        achievement: "Winner of Hackathon 2022",
      },
      {
        id: 5,
        name: 'CodeGenius',
        image: card1,
        technologies: ['ReactJS', 'NodeJS'],
        achievement: "Winner of Hackathon 2022",
      },
      {
        id: 6,
        name: 'Innovator',
        image: card2,
        technologies: ['Java', 'Spring Boot'],
        achievement: "Winner of Hackathon 2022",
      },
      {
        id: 7,
        name: 'Mad_Coder',
        image: card1,
        technologies: ['ReactJS', 'MemStack'],
        achievement: "Winner of Hackathon 2022",
      },
      {
        id: 8,
        name: 'CodeMaster',
        image: card2,
        technologies: ['ReactJS', 'NodeJS'],
        achievement: "Winner of Hackathon 2022",
      },
      {
        id: 9,
        name: 'CodeGenius',
        image: card1,
        technologies: ['ReactJS', 'NodeJS'],
        achievement: "Winner of Hackathon 2022",
      },
      {
        id: 10,
        name: 'Innovator',
        image: card2,
        technologies: ['Java', 'Spring Boot'],
        achievement: "Winner of Hackathon 2022",
      },
  ]);

  const scrollContainer = (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  const handleProfileClick = () => {
    navigate('/Profile'); // Navigate to ProfileSwiper on click
  };

  return (
    <div className="container">
 <NavBar/>
      <main className="main-content">
        {/* Matches Section */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Your Matches</h2>
            <button className="view-more">View More</button>
          </div>
          <div className="scroll-container">
            <div id="matches-container" className="scrollable-content">
              {matches.map((profile) => (
                <div key={profile.id} className="card" onClick={handleProfileClick}>
                  <div className="card-image-wrapper">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="card-image"
                    />
                    <button className="icon-button heart-button">♥</button>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{profile.name}</h3>
                    <div className="technologies">
                      {profile.technologies.map((tech) => (
                        <span key={tech} className="tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollContainer('matches-container')}
              className="scroll-button"
            >
              {'>'}
            </button>
          </div>
        </section>

        {/* Explore Section */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Explore</h2>
            <button className="view-more">View More</button>
          </div>
          <div className="scroll-container">
            <div id="explore-container" className="scrollable-content">
              {explore.map((profile) => (
                <div key={profile.id} className="card">
                  <div className="card-image-wrapper">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="card-image"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{profile.name}</h3>
                    <p className="achievement">{profile.achievement}</p>
                    <div className="technologies">
                      {profile.technologies.map((tech) => (
                        <span key={tech} className="tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollContainer('explore-container')}
              className="scroll-button"
            >
              {'>'}
            </button>
          </div>
        </section>
      </main>

     
    <Footer/>
    </div>
  );
}

