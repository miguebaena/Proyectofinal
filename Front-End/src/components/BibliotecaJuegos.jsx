import React, { useEffect, useState } from "react";
import { API_URL } from "../config.js";
import FormularioJuego from "./FormularioJuego.jsx";
import TarjetaJuego from "./TarjetaJuego.jsx";
import EstadisticasPersonales from "./EstadisticasPersonales.jsx";

const BibliotecaJuegos = () => {
  const [games, setGames] = useState([]);

  // Cargar juegos desde el backend
  useEffect(() => {
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error al cargar juegos:", err));
  }, []);

  // Agregar juego al backend
  const agregarJuego = async (juego) => {
    try {
      const res = await fetch(`${API_URL}/juegos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(juego),
      });
      const nuevo = await res.json();
      setGames([...games, nuevo]);
    } catch (err) {
      console.error("Error al agregar juego:", err);
    }
  };

  // Eliminar juego del backend
  const eliminarJuego = async (id) => {
    await fetch(`${API_URL}/juegos/${id}`, { method: "DELETE" });
    setGames(games.filter((j) => j._id !== id));
  };

  // 🔹 Editar juego
  const editarJuego = async (id, actualizado) => {
    const res = await fetch(`${API_URL}/juegos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(actualizado),
    });
    const data = await res.json();
    setGames(games.map((j) => (j._id === id ? data : j)));
  };

  return (
    <section>
      <h2>Biblioteca de Juegos</h2>
      <FormularioJuego onAdd={agregarJuego} />
      <EstadisticasPersonales games={games} />

      <div className="grid">
        {games.length === 0 ? (
          <p>No hay juegos agregados aún.</p>
        ) : (
          games.map((juego) => (
            <TarjetaJuego
              key={juego._id}
              game={juego}
              onDelete={eliminarJuego}
              onEdit={editarJuego}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default BibliotecaJuegos;
