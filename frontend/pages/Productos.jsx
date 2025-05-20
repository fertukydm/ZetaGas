import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", price: "", stock: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/api/products/${editingId}`, form);
    } else {
      await axios.post("http://localhost:5000/api/products", form);
    }
    setForm({ name: "", description: "", price: "", stock: "" });
    setEditingId(null);
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingId(product._id);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Gestión de Productos</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Descripción"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />
        <button type="submit">{editingId ? "Actualizar" : "Crear"}</button>
      </form>

      <hr />

      <ul>
        {products.map((p) => (
          <li key={p._id}>
            <strong>{p.name}</strong> - {p.description} - ${p.price} - Stock: {p.stock}
            <button onClick={() => handleEdit(p)}>Editar</button>
            <button onClick={() => handleDelete(p._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
