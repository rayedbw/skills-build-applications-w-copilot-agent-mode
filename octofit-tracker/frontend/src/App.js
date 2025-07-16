import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src="/octofitapp-small.png" alt="OctoFit Logo" />
            <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={handleNavCollapse}
              aria-controls="navbarNav" 
              aria-expanded={!isNavCollapsed} 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities" onClick={() => setIsNavCollapsed(true)}>🏃‍♂️ Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard" onClick={() => setIsNavCollapsed(true)}>🏆 Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams" onClick={() => setIsNavCollapsed(true)}>👥 Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users" onClick={() => setIsNavCollapsed(true)}>👤 Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts" onClick={() => setIsNavCollapsed(true)}>💪 Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="welcome-message">
                🎯 Welcome to OctoFit Tracker
                <div style={{fontSize: '1.2rem', marginTop: '1rem', opacity: 0.8}}>
                  Mergington High School's Premier Fitness Platform
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
