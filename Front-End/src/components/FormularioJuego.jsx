import React, { useState } from "react";

const FormularioJuego = ({ onAdd }) => {
  const [form, setForm] = useState({
    nombre: "",
    plataforma: "",
    portadaURL: "",
    descripcion: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre.trim()) return alert("Agrega un título al juego");
    onAdd(form);
    setForm({ nombre: "", plataforma: "", portadaURL: "", descripcion: "" });
  };

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <input
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Título del juego"
      />
      <select
        name="plataforma"
        value={form.plataforma}
        onChange={handleChange}
      >
        {["PC", "Xbox", "PlayStation", "Celular", "Multiplataforma"].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <input
        name="portadaURL"
        value={form.portadaURL}
        onChange={handleChange}
        placeholder="URL de portada (opcional)"
      />
      <textarea
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
        placeholder="Descripción (opcional)"
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormularioJuego;
