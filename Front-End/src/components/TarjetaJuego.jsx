import React, { useState } from "react";
import ListaReseñas from "./ListaReseñas.jsx";
import FormularioReseña from "./FormularioReseña.jsx";

const TarjetaJuego = () => {
  const [mostrarReseñas, setMostrarReseñas] = useState(false);

  return (
    <article className="card">
      <img
        src="https://via.placeholder.com/150x200?text=Portada"
        alt="Portada del juego"
        className="cover"
      />
      <div className="card-body">
        <h3>Título del juego</h3>
        <p><strong>Plataforma:</strong> PC</p>
        <p>Descripción breve del juego...</p>
        <p>Rating: ⭐⭐⭐⭐☆</p>
        <p>Completado: No</p>
        <p>Horas jugadas: 12</p>

        <div className="card-actions">
          <button onClick={() => setMostrarReseñas(!mostrarReseñas)}>
            {mostrarReseñas ? "Ocultar reseñas" : "Ver reseñas"}
          </button>
          <button>Marcar como completado</button>
          <button>Eliminar</button>
        </div>

        {mostrarReseñas && (
          <div className="reviews-section">
            <FormularioReseña />
            <ListaReseñas />
          </div>
        )}
      </div>
    </article>
  );
};

export default TarjetaJuego;