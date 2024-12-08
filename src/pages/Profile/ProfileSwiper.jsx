import React, { useState } from 'react';
import './ProfileSwiper.css';
import '../NavBar/NavBar'
import Footer from '../Footer/Footer';
import card1 from '../../assets/card-1.svg';
import card2 from '../../assets/card-2.svg';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

const profiles = [
  {
    id: 1,
    name: "Mad_Coder",
    title: "Winner of EthIndia'22",
    skills: ["Reactjs", "MemStack"],
    rating: 3,
    image:card1
  },
  {
    id: 2,
    name: "Tech_Ninja",
    title: "Full Stack Developer",
    skills: ["Node.js", "MongoDB"],
    rating: 4,
    image: card2
  },
  {
    id: 3,
    name: "Code_Master",
    title: "Senior Software Engineer",
    skills: ["Python", "AWS"],
    rating: 5,
    image:card1
  }
];

function ProfileSwiper() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProfile = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  const previousProfile = () => {
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };
  const handleCardClick = () => {
    navigate('/Profilereal'); // Navigate to Profile on card click
  };

  const currentProfile = profiles[currentIndex];

  return (
    <div>
      <NavBar/>
    
    <div className="profile-swiper">
      
      <div key={currentProfile.id} className="profile-card">
      

        <div className="profile-content">
          <button className="nav-button prev" onClick={previousProfile}>
            <i className="chevron-left"></i>
          </button>
          <button className="nav-button next" onClick={nextProfile}>
            <i className="chevron-right"></i>
          </button>

          <img src={currentProfile.image} alt={currentProfile.name} className="profile-image"  onClick={handleCardClick} />

          <div className="profile-info">
            <h2>{currentProfile.name}</h2>
            <p>{currentProfile.title}</p>
            
            <div className="skills">
              {currentProfile.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>

            <div className="rating">
              {[...Array(currentProfile.rating)].map((_, i) => (
                <i key={i} className="star-icon"></i>
              ))}
            </div>

            <div className="action-buttons">
              <button onClick={nextProfile} className="action-button cross">
                <i className="cross-icon"></i>
              </button>
              <button className="action-button heart">
                <i className="heart-icon"></i>
              </button>
            </div>
          </div>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ProfileSwiper;
