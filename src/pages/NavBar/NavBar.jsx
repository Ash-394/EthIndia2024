import React from 'react';
import './NavBar.css';
import searchIcon from '../../assets/search.svg';

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Centered Title */}
      <h1 className="navbar-title">Arike Hacker</h1>
      
      {/* Search bar positioned at the right */}
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button className="searchbutton">
          <img src={searchIcon} alt="Search" className="search" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
