import React, { useEffect, useState } from "react";
import { API_URL } from "../config.js";
import ListaReseñas from "./ListaReseñas.jsx";
import FormularioReseña from "./FormularioReseña.jsx";

const TarjetaJuego = ({ game, onDelete, onEdit }) => {
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState(game);
  const [mostrarReseñas, setMostrarReseñas] = useState(false);
  const [reseñas, setReseñas] = useState([]);

  // 🔹 Cargar reseñas del backend
  useEffect(() => {
    fetch(`${API_URL}/resenas?juegoId=${game._id}`)
      .then((res) => res.json())
      .then((data) => setReseñas(data))
      .catch((err) => console.error("Error al cargar reseñas:", err));
  }, [game._id]);

  // 🔹 Agregar reseña
  const agregarReseña = async (reseña) => {
    const nueva = { ...reseña, juego: game._id };
    const res = await fetch(`${API_URL}/resenas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nueva),
    });
    const data = await res.json();
    setReseñas([...reseñas, data]);
  };

  // 🔹 Editar reseña
  const editarReseña = async (id, actualizada) => {
    const res = await fetch(`${API_URL}/resenas/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(actualizada),
    });
    const data = await res.json();
    setReseñas(reseñas.map((r) => (r._id === id ? data : r)));
  };

  // 🔹 Eliminar reseña
  const eliminarReseña = async (id) => {
    await fetch(`${API_URL}/resenas/${id}`, { method: "DELETE" });
    setReseñas(reseñas.filter((r) => r._id !== id));
  };

  // 🔹 Editar juego
  const handleEdit = async (e) => {
    e.preventDefault();
    await onEdit(game._id, form);
    setEditando(false);
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
            <input
              value={form.plataforma}
              onChange={(e) => setForm({ ...form, plataforma: e.target.value })}
              placeholder="Plataforma"
            />
            <textarea
              value={form.descripcion}
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
