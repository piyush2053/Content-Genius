import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Helmet } from 'react-helmet';
import Home from './pages/Home/Home.tsx';
import AboutUs from './pages/AboutUs/AboutUs.tsx';
import AiAction from './pages/AiAction/AiAction.tsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Helmet>
        <title>Content genius</title>
        <meta name="description" content="Content Genius is designed to empower users with the ability to effortlessly refine their sentences into captivating and polished content. With this innovative tool, users can input their sentences and corresponding content, and watch as Content Genius works its magic to generate the top three suggestions, ensuring correctness, coherence, and impact." />
        <meta name="keywords" content="Content, Genius, Suggestion, AI, Creativity, Innovation, Intelligence, Inspiration, Ingenuity, Insight, Brilliance, Imagination, Visionary, Originality, Resourcefulness, Inventiveness, Expertise, Wisdom, Problem-solving, Futuristic, Analytical, Cutting-edge, Cognitive, Strategic, Adaptive, Vision, Perception, Cognitive Computing, Intuition, Data-driven, Algorithm, Automation, Machine Learning, Neural Networks, Pattern Recognition, Computational Thinking, Deep Learning, Predictive Analytics, Virtual Reality, Augmented Reality, Natural Language Processing, Robotics, Quantum Computing, Cybernetics, Algorithmic Creativity, Smart Systems, Autonomous, Cognitive Computing, Evolutionary Algorithms, Humanoid, Swarm Intelligence, Decision Support Systems, Cognitive Psychology, Emergent Intelligence" />
      </Helmet>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/aiAction" element={<AiAction />} /> 
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
