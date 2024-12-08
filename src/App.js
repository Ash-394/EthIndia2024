import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage2 from './pages/MainPage2/MainPage2';
import Profile from './pages/Profilereal/Profile';
import ProfileSwiper from './pages/Profile/ProfileSwiper';
import Signup from './pages/Signup/Signup';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/' element={<Signup/>} />
          <Route path='/MainPage' element={<MainPage2/>} />
          <Route path='/Profile' element={<ProfileSwiper/>} />
          <Route path='/Profilereal' element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;