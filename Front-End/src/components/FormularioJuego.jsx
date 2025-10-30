import React from "react";
const FormularioJuego = () => {
  return (
    <form className="game-form">
      <inpu placeholder="Título" />
      <input placeholder="Plataforma" />
      <input placeholder="URL de portada (opcional)" />
      <input placeholder="Descripción (opcional)" />
      <button type="button">Agregar</button>
    </form>
  );
};

export default FormularioJuego;
