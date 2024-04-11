import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components here (assuming they are in separate files)
import Home from './pages/Home/index'
import Contact from './pages/Contact/index'
import About from './pages/About/index'
// ... (add other components)

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Home />} />   
      <Route path="/home" element={<Home />} />  
      <Route path="/about" element={<About />} /> 
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
  </BrowserRouter>
);