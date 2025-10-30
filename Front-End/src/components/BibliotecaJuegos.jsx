import React from "react";
import TarjetaJuego from "./TarjetaJuego.jsx";
import FormularioJuego from "./FormularioJuego.jsx";
import EstadisticasPersonales from "./EstadisticasPersonales.jsx";

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

      <EstadisticasPersonales />

      <h2>Biblioteca</h2>
      <div className="grid">
        <TarjetaJuego />
        <TarjetaJuego />
        <TarjetaJuego />
      </div>
    </section>
  );
};

export default BibliotecaJuegos;
