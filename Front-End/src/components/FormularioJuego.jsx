import React from "react";
const FormularioJuego = () => {
  return (
    <form className="game-form">
      <input placeholder="Título" />
      <select placeholder="Plataforma">
        {["Elegir Plataforma","PC","PlayStation","XBox","Nintendo","Multiplataforma"].map((n) => (
          <option key={n}>{n}</option>
        ))}
      </select>
      <input placeholder="URL de portada (opcional)" />
      <input placeholder="Descripción (opcional)" />
      <button type="button">Agregar</button>
    </form>
  );
};

export default FormularioJuego;
