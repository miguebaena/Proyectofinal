import React from "react";
import FormularioJuego from "./FormularioJuego.jsx";

const BibliotecaJuegos = () => {
  return (
    <section>
      <div className="top-row">
        <div>
          <input placeholder="Buscar juegos..." />
        </div>
        <div>
          <h3>Agregar nuevo juego</h3>
          <FormularioJuego />
        </div>
      </div>

      <h2>Biblioteca</h2>
    </section>
  );
};

export default BibliotecaJuegos;
