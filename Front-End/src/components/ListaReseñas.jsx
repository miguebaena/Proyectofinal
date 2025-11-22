import React, { useState } from "react";

const ListaReseñas = ({ reseñas, onEdit, onDelete }) => {
  const [editandoId, setEditandoId] = useState(null);
  const [textoTemp, setTextoTemp] = useState("");

  const iniciarEdicion = (r) => {
    setEditandoId(r._id);
    setTextoTemp(r.texto);
  };

  const guardarCambios = (r) => {
    onEdit(r._id, { ...r, texto: textoTemp });
    setEditandoId(null);
  };

  return (
    <div className="reviews-list">
      {reseñas.length === 0 ? (
        <p>No hay reseñas aún.</p>
      ) : (
        reseñas.map((r) => (
          <div key={r._id} className="review">
            <div className="review-header">
              <strong>{r.autor || "Anónimo"}</strong> — {r.puntuacion}★
              <button onClick={() => onDelete(r._id)}>Eliminar</button>
              <button onClick={() => iniciarEdicion(r)}>Editar</button>
            </div>

            {editandoId === r._id ? (
              <>
                <textarea
                  value={textoTemp}
                  onChange={(e) => setTextoTemp(e.target.value)}
                />
                <button onClick={() => guardarCambios(r)}>Guardar</button>
                <button onClick={() => setEditandoId(null)}>Cancelar</button>
              </>
            ) : (
              <p>{r.texto}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ListaReseñas;
