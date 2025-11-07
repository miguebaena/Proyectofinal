import React, { useState } from "react";

const FormularioJuego = ({ onAdd }) => {
  const [form, setForm] = useState({
    titulo: "",
    plataforma: "",
    portada: "",
    descripcion: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.titulo.trim()) return alert("Agrega un título al juego");
    onAdd(form);
    setForm({ titulo: "", plataforma: "", portada: "", descripcion: "" });
  };

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <input
        name="titulo"
        value={form.titulo}
        onChange={handleChange}
        placeholder="Título del juego"
      />
      <select
        name="plataforma"
        value={form.plataforma}
        onChange={handleChange}
      >
        {["Plataforma", "PC", "Xbox", "PlayStation", "Celular", "Multiplataforma"].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <input
        name="portada"
        value={form.portada}
        onChange={handleChange}
        placeholder="URL de portada (opcional)"
      />
      <textarea
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
        placeholder="Descripción (opcional)"
      />
      <button type="submit">Agregar juego</button>
    </form>
  );
};

export default FormularioJuego;
