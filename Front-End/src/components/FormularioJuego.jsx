import React, { useState } from "react";

const FormularioJuego = ({ onAdd }) => {
  const [form, setForm] = useState({
    nombre: "",
    plataforma: "",
    portadaURL: "",
    estado: "Pendiente",
    horasJugadas: 0
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre.trim()) return alert("Agrega un nombre al juego");
    onAdd(form);
    setForm({
      nombre: "",
      plataforma: "",
      portadaURL: "",
      estado: "Pendiente",
      horasJugadas: 0
    });
  };

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <input
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre del juego"
      />

      <select name="plataforma" value={form.plataforma} onChange={handleChange}>
        {["", "PC", "Xbox", "PlayStation", "Nintendo", "Celular", "Multiplataforma"].map(
          (n) => (
            <option key={n} value={n}>
              {n || "Selecciona plataforma"}
            </option>
          )
        )}
      </select>

      <input
        name="portadaURL"
        value={form.portadaURL}
        onChange={handleChange}
        placeholder="URL de la portada"
      />

      <select name="estado" value={form.estado} onChange={handleChange}>
        {["Pendiente", "Jugando", "Completado"].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>

      <button type="submit">Agregar juego</button>
    </form>
  );
};

export default FormularioJuego;
