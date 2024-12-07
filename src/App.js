import './App.css';
//import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';


function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage />} />
         
          
                
                
            
         
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;