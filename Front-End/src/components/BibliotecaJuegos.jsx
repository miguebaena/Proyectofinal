import React from "react";
import FormularioJuego from "./FormularioJuego.jsx";
import TarjetaJuego from "./TarjetaJuego.jsx";
import EstadisticasPersonales from "./EstadisticasPersonales.jsx";

const BibliotecaJuegos = ({ games, setGames }) => {
  const agregarJuego = (juego) => {
    setGames([...games, { ...juego, id: Date.now(), reseñas: [] }]);
  };

  const eliminarJuego = (id) => {
    setGames(games.filter((j) => j.id !== id));
  };

  const editarJuego = (id, actualizado) => {
    setGames(games.map((j) => (j.id === id ? { ...j, ...actualizado } : j)));
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
              key={juego.id}
              game={juego}
              onDelete={eliminarJuego}
              onEdit={editarJuego}
              setGames={setGames}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default BibliotecaJuegos;
