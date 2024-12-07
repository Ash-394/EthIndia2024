import React, { useState } from 'react';
import './Profile.css';
import card2 from '../../assets/card-2.svg'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const achievements = [
    {
      title: "Bagged Runner Up for ETHIndia'23",
      tags: ['Hackathon', 'ReactJS', 'MERN']
    },
    {
      title: "Completed a 10 day Solana workshop",
      tags: ['Workshop', 'Blockchain']
    },
    {
      title: "Published a NFT exchange based game",
      tags: ['Workshop']
    }
  ];

  const handleTabClick = (tab) => {
    if (tab === 'badges') {
      // Navigation to badges page will be implemented later
      alert('Badges page will be implemented later');
      return;
    }
    setActiveTab(tab);
  };

  return (
    <div><NavBar/>
    <div className="profile-container">
        
      <div className="profile-content">
      
          <h1>My Profile</h1>
       

        <div className="profile-info">
          <img 
            src={card2}
            alt="Profile" 
            className="profile-picture"
          />
          <h2 className="username">Mad_Coder</h2>
          <p className="handle">@mad_coder</p>
          
          <div className="skills">
            <span className="skill-tag react">ReactJS</span>
            <span className="skill-tag blockchain">Blockchain</span>
            <span className="skill-tag mern">MERN</span>
          </div>
        </div>

        <div className="stats">
          <div className="stat-box">
            <h3>53</h3>
            <p>Posts</p>
          </div>
          <div className="stat-box">
            <h3>0</h3>
            <p>Requirements</p>
          </div>
          <div className="stat-box">
            <h3>10</h3>
            <p>Badges</p>
          </div>
        </div>

        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'posts' ? 'active' : ''}`}
            onClick={() => handleTabClick('posts')}
          >
            Posts
          </button>
          <button 
            className={`tab ${activeTab === 'requirements' ? 'active' : ''}`}
            onClick={() => handleTabClick('requirements')}
          >
            Requirements
          </button>
          <button 
            className={`tab ${activeTab === 'badges' ? 'active' : ''}`}
            onClick={() => handleTabClick('badges')}
          >
            Badges
          </button>
        </div>

        <div className="achievements">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <h3>{achievement.title}</h3>
              <div className="achievement-tags">
                {achievement.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="achievement-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Profile;
