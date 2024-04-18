import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components here (assuming they are in separate files)
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/index'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Playground from './pages/Playground/Playground'
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
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="/playground" element={<Playground />} /> 
    </Routes>
  </BrowserRouter>
);