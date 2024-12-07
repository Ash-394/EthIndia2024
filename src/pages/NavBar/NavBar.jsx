import React from 'react';
import './NavBar.css';
import searchIcon from '../../assets/search.svg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">ARIKE Hacker</h1>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button className='searchbutton'>
          <img src={searchIcon} alt="Search" className="search" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
