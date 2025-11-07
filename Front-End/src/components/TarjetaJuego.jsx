import React, { useState } from "react";
import ListaReseñas from "./ListaReseñas.jsx";
import FormularioReseña from "./FormularioReseña.jsx";

const TarjetaJuego = ({ game, onDelete, onEdit, setGames }) => {
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState(game);
  const [mostrarReseñas, setMostrarReseñas] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    onEdit(game.id, form);
    setEditando(false);
  };

  const agregarReseña = (reseña) => {
    const nuevas = [...(game.reseñas || []), { ...reseña, id: Date.now() }];
    onEdit(game.id, { reseñas: nuevas });
  };

  const editarReseña = (id, actualizada) => {
    const nuevas = game.reseñas.map((r) => (r.id === id ? actualizada : r));
    onEdit(game.id, { reseñas: nuevas });
  };

  const eliminarReseña = (id) => {
    const nuevas = game.reseñas.filter((r) => r.id !== id);
    onEdit(game.id, { reseñas: nuevas });
  };

  return (
    <article className="card">
      <img
        src={
          game.portada || "https://via.placeholder.com/150x200?text=Portada"
        }
        alt={game.titulo}
        className="cover"
      />
      <div className="card-body">
        {editando ? (
          <form onSubmit={handleEdit}>
            <input
              value={form.titulo}
              onChange={(e) =>
                setForm({ ...form, titulo: e.target.value })
              }
              placeholder="Título"
            />
            <input
              value={form.plataforma}
              onChange={(e) =>
                setForm({ ...form, plataforma: e.target.value })
              }
              placeholder="Plataforma"
            />
            <textarea
              value={form.descripcion}
              onChange={(e) =>
                setForm({ ...form, descripcion: e.target.value })
              }
              placeholder="Descripción"
            />
            <button type="submit">Guardar</button>
          </form>
        ) : (
          <>
            <h3>{game.titulo}</h3>
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
          <button onClick={() => onDelete(game.id)}>Eliminar</button>
        </div>

        {mostrarReseñas && (
          <div className="reviews-section">
            <FormularioReseña onAdd={agregarReseña} />
            <ListaReseñas
              reseñas={game.reseñas || []}
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
