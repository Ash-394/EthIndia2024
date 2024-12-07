import './App.css';
//import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage2 from './pages/MainPage2/MainPage2';
import Profile from './pages/Profilereal/Profile';
import ProfileSwiper from './pages/Profile/ProfileSwiper';



function App() {


  return (
    <Router>
      
      <div className="App">
        <Routes>
          <Route path='/MainPage' element={<MainPage2/>} />
          <Route path='/Profile' element={<ProfileSwiper/>} />
          <Route path='/Profilereal' element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;