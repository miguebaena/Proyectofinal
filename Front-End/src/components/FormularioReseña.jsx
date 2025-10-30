import React from "react";

const FormularioReseña = () => {
  return (
    <form className="review-form">
      <input placeholder="Autor (opcional)" />
      <input placeholder="Escribe tu reseña..." />
      <label>Puntaje: </label>
      <select>
        {[5, 4, 3, 2, 1, 0].map((n) => (
          <option key={n}>{n}</option>
        ))}
      </select>
      <button type="button">Enviar</button>
    </form>
  );
};

export default FormularioReseña;
