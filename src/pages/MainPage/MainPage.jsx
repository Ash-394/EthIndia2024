import React from 'react'
import NavBar from '../NavBar/NavBar'
import './MainPage.css'
import card1 from '../../assets/card-1.svg';

const MainPage = () => {
  return (
    <div>
        <div className="navbar-2">
        <NavBar/>
        </div>
        <div className="your-matches">
            <h2>Your Matches</h2>
            <div className='cards-group'>
                <div >
                    <img src={card1} alt="card" className='card-1'/>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default MainPage