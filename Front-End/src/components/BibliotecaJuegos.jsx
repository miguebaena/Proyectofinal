import React from "react";
import TarjetaJuego from "./TarjetaJuego.jsx";
import FormularioJuego from "./FormularioJuego.jsx";

const BibliotecaJuegos = () => {
  return (
    <section>
      <div className="top-row">
        <div className="buscarjuegos">
          <input placeholder="Buscar juegos..." />
        </div>
        <div>
          <h3>Agregar nuevo juego</h3>
          <FormularioJuego />
        </div>
      </div>

      <h2>Biblioteca</h2>
      <div className="grid">
        <TarjetaJuego />
      </div>
    </section>
  );
};

export default BibliotecaJuegos;
