import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio.jsx';
import Nav from '../components/Nav.jsx'; 
import Productos from './pages/Productos.jsx'; 
import Empleados from './pages/Empleados.jsx'; 
import Blog from "./pages/Blog.jsx";


function App() {
  return (
    <Routes>
      <Navbar />
      <Routes>
        <Route path="/Empleados" element={<div>Empleados</div>} />
        <Route path="/Productos" element={<div>Productos</div>} />
        <Route path="/Blog" element={<div>Blog</div>} />
        <Route path="/Inicio" element={<div>Inicio</div>} />
      </Routes>
    </Routes>
  );
}

export default App;
