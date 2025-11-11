import React from "react";

const ListaReseñas = ({ reseñas, onEdit, onDelete }) => {
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
            </div>
            <textarea
              value={r.texto}
              onChange={(e) => onEdit(r._id, { ...r, texto: e.target.value })}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ListaReseñas;
