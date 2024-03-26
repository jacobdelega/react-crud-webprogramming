import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components here (assuming they are in separate files)
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// ... (add other components)

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />  {/* Renders Home component for root path */}
      <Route path="/about" element={<About />} />  {/* Renders About component for /about path */}
      <Route path="/contact" element={<Contact />} />  {/* Renders Contact component for /contact path */}
      {/* Add more routes for other components here */}
    </Routes>
  </BrowserRouter>
);