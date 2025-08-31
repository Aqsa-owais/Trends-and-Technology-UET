import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Registration from './components/Registration';
import AboutUs from './components/AboutUs';
import AboutSession from './components/AboutSession';
import Resources from './components/Resources';
import Assignments from './components/Assignments';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/session" element={<AboutSession />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;