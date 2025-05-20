import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Nav.css'; // Asegurate de importar tu CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Marca */}
        <div className="navbar-logo">
          <img src="/img/logo-zgas.png" alt="Z Gas Logo" />
          <span>Z Gas</span>
        </div>

        {/* Menú desktop */}
        <div className="navbar-links">
          <Link to="/empleados">Empleados</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/blog">Blog</Link>
        </div>

        {/* Botón hamburguesa */}
        <div className="navbar-toggle">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="navbar-mobile">
          <Link to="/empleados">Empleados</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/blog">Blog</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



