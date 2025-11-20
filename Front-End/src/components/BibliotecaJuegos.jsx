import React, { useEffect, useState } from "react";
import { API_URL } from "../config.js";
import FormularioJuego from "./FormularioJuego.jsx";
import TarjetaJuego from "./TarjetaJuego.jsx";
import EstadisticasPersonales from "./EstadisticasPersonales.jsx";
import "../App.css";

const BibliotecaJuegos = () => {
  const [games, setGames] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  // 🔹 Cargar juegos del backend
  useEffect(() => {
    fetch(`${API_URL}/juegos`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error al cargar juegos:", err));
  }, []);

  // 🔹 Agregar juego nuevo
  const agregarJuego = async (juego) => {
    try {
      const res = await fetch(`${API_URL}/juegos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(juego),
      });
      const nuevo = await res.json();

      if (res.ok) {
        setGames([...games, nuevo]);
        setMostrarModal(false);
      } else {
        console.error("Error al guardar el juego:", nuevo);
        alert("Error al guardar el juego. Revisa los datos.");
      }
    } catch (err) {
      console.error("Error al agregar juego:", err);
    }
  };

  // 🔹 Eliminar juego
  const eliminarJuego = async (id) => {
    const confirmar = window.confirm("¿Seguro que deseas eliminar este juego?");
    if (!confirmar) return;

    try {
      const res = await fetch(`${API_URL}/juegos/${id}`, { method: "DELETE" });
      if (res.ok) {
        setGames(games.filter((j) => j._id !== id));
      }
    } catch (err) {
      console.error("Error al eliminar juego:", err);
    }
  };

  // 🔹 Editar juego
  const editarJuego = async (id, actualizado) => {
    try {
      const res = await fetch(`${API_URL}/juegos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(actualizado),
      });
      const data = await res.json();
      if (res.ok) {
        setGames(games.map((j) => (j._id === id ? data : j)));
      }
    } catch (err) {
      console.error("Error al editar juego:", err);
    }
  };

  //Actualizar reseñas

  const actualizarResenasJuego = (id, nuevasResenas) => {
  setGames((prevGames) =>
    prevGames.map((juego) =>
      juego._id === id ? { ...juego, reseñas: nuevasResenas } : juego
    )
  );
};



  return (
    <section>
      <h2>Biblioteca de Juegos</h2>

      <button className="add-btn" onClick={() => setMostrarModal(true)}>
        + Agregar Juego
      </button>

      <EstadisticasPersonales games={games} />

      {mostrarModal && (
        <div className="modal-bg">
          <div className="modal">
            <h3>Agregar Nuevo Juego</h3>
            <FormularioJuego onAdd={agregarJuego} />
            <div className="modal-buttons">
              <button onClick={() => setMostrarModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

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
              onUpdateResenas={actualizarResenasJuego}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default BibliotecaJuegos;
