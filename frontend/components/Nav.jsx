import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Iconos de menú

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Marca */}
        <div className="flex items-center space-x-3">
          <img src="/icono.zetagas" alt="Z Gas Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">Z Gas</span>
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/empleados" className="hover:text-yellow-300 transition">Empleados</Link>
          <Link to="/productos" className="hover:text-yellow-300 transition">Productos</Link>
          <Link to="/blog" className="hover:text-yellow-300 transition">Blog</Link>
        </div>

        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 pb-4">
          <Link to="/empleados" className="block py-2 hover:text-yellow-300">Empleados</Link>
          <Link to="/productos" className="block py-2 hover:text-yellow-300">Productos</Link>
          <Link to="/blog" className="block py-2 hover:text-yellow-300">Blog</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


