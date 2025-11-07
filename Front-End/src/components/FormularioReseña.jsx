import React, { useState } from "react";

const FormularioReseña = ({ onAdd }) => {
  const [form, setForm] = useState({
    autor: "",
    texto: "",
    puntaje: 5,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.texto.trim()) return alert("Escribe una reseña");
    onAdd(form);
    setForm({ autor: "", texto: "", puntaje: 5 });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        name="autor"
        value={form.autor}
        onChange={handleChange}
        placeholder="Autor (opcional)"
      />
      <input
        name="texto"
        value={form.texto}
        onChange={handleChange}
        placeholder="Tu reseña"
      />
      <label>Puntaje: </label>
      <select
        name="puntaje"
        value={form.puntaje}
        onChange={handleChange}
      >
        {[5, 4, 3, 2, 1, 0].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <button type="submit">Agregar reseña</button>
    </form>
  );
};

export default FormularioReseña;
