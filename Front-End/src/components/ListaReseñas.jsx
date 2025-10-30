import React from "react";

const ListaReseñas = () => {
  return (
    <div>
      <h4>Reseñas</h4>
      <div className="review">
        <div className="review-header">
          <strong>Jugador1</strong> — 5★
          <button>Eliminar</button>
        </div>
        <p>Excelente juego, con una historia impresionante.</p>
      </div>

      <div className="review">
        <div className="review-header">
          <strong>GamerPro</strong> — 4★
          <button>Eliminar</button>
        </div>
        <p>Muy divertido, pero un poco repetitivo.</p>
      </div>
    </div>
  );
};

export default ListaReseñas;
