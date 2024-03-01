import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home.tsx';
import AboutUs from './pages/AboutUs/AboutUs.tsx';
import AiAction from './pages/AiAction/AiAction.tsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/aiAction" element={<AiAction />} /> 
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
