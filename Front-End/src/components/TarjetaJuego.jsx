import React, { useState, useEffect } from "react";
import ListaReseñas from "./ListaReseñas.jsx";
import FormularioReseña from "./FormularioReseña.jsx";

const TarjetaJuego = ({ game, onDelete, onEdit, onUpdateResenas }) => {
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState(game);
  const [mostrarReseñas, setMostrarReseñas] = useState(false);
  const [reseñas, setReseñas] = useState([]);

  //Cargar reseñas del backend
  useEffect(() => {
    if (mostrarReseñas) {
      fetch(`http://localhost:3000/api/resenas?juegoId=${game._id}`)
        .then((res) => res.json())
        .then((data) => setReseñas(data))
        .catch((err) => console.error("Error al cargar reseñas:", err));
    }
  }, [mostrarReseñas, game._id]);

  //Crear reseña
  const agregarReseña = async (reseña) => {
    const nueva = { ...reseña, juego: game._id };
    try {
      const res = await fetch("http://localhost:3000/api/resenas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nueva),
      });
      const data = await res.json();
      const nuevas = [...reseñas, data];
      setReseñas(nuevas);
      onUpdateResenas(game._id, nuevas);
    } catch (error) {
      console.error("Error al agregar reseña:", error);
    }
  };

  //Editar reseña
  const editarReseña = async (id, actualizada) => {
    try {
      const res = await fetch(`http://localhost:3000/api/resenas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(actualizada),
      });
      const data = await res.json();
      const nuevas = reseñas.map((r) => (r._id === id ? data : r));
      setReseñas(nuevas);
      onUpdateResenas(game._id, nuevas);
    } catch (error) {
      console.error("Error al editar reseña:", error);
    }
  };

  //Eliminar reseña
  const eliminarReseña = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/resenas/${id}`, { method: "DELETE" });
      const nuevas = reseñas.filter((r) => r._id !== id);
      setReseñas(nuevas);
      onUpdateResenas(game._id, nuevas);
    } catch (error) {
      console.error("Error al eliminar reseña:", error);
    }
  };

  //Guardar cambios al editar juego
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/juegos/${game._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      onEdit(game._id, data);
      setEditando(false);
    } catch (error) {
      console.error("Error al editar juego:", error);
    }
  };

  return (
    <article className="card">
      <img
        src={game.portadaURL || "https://via.placeholder.com/150x200?text=Portada"}
        alt={game.nombre}
        className="cover"
      />
      <div className="card-body">
        {editando ? (
  <form onSubmit={handleEdit}>
    <input
      value={form.nombre}
      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
      placeholder="Título"
    />
    <select
      value={form.plataforma}
      onChange={(e) =>
        setForm({ ...form, plataforma: e.target.value })
      }
    >
      <option value="">Selecciona una plataforma</option>
      <option value="PC">PC</option>
      <option value="Xbox">Xbox</option>
      <option value="PlayStation">PlayStation</option>
      <option value="Celular">Celular</option>
      <option value="Multiplataforma">Multiplataforma</option>
    </select>

    <textarea
      value={form.descripcion || ""}
      onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
      placeholder="Descripción"
    />

    <button type="submit">Guardar</button>
  </form>
) : (
  <>
    <h3>{game.nombre}</h3>
    <p><strong>Plataforma:</strong> {game.plataforma}</p>
    <p>{game.descripcion}</p>
  </>
)}
        <div className="card-actions">
          <button onClick={() => setMostrarReseñas(!mostrarReseñas)}>
            {mostrarReseñas ? "Ocultar reseñas" : "Ver reseñas"}
          </button>
          <button onClick={() => setEditando(!editando)}>
            {editando ? "Cancelar" : "Editar"}
          </button>
          <button onClick={() => onDelete(game._id)}>Eliminar</button>
        </div>

        {mostrarReseñas && (
          <div className="reviews-section">
            <FormularioReseña onAdd={agregarReseña} />
            <ListaReseñas
              reseñas={reseñas}
              onEdit={editarReseña}
              onDelete={eliminarReseña}
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default TarjetaJuego;
