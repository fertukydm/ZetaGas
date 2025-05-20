import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/empleados" element={<div>Empleados</div>} />
        <Route path="/productos" element={<div>Productos</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/" element={<div>Inicio</div>} />
      </Routes>
    </Router>
  );
}

export default App;
