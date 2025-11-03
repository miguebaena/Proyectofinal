import React, { useState } from "react";
import BibliotecaJuegos from "./components/BibliotecaJuegos.jsx";
import "../src/styles/styles.css";

const App = () => {
  const [games, setGames] = useState([]);

  const addGame = (newGame) => {
    setGames([...games, { ...newGame, id: Date.now(), reviews: [] }]);
  };

  const deleteGame = (id) => {
    setGames(games.filter((g) => g.id !== id));
  };

  const updateGame = (id, updated) => {
    setGames(games.map((g) => (g.id === id ? { ...g, ...updated } : g)));
  };

  const addReview = (gameId, review) => {
    setGames(
      games.map((g) =>
        g.id === gameId
          ? { ...g, reviews: [...g.reviews, { ...review, id: Date.now() }] }
          : g
      )
    );
  };

  const updateReview = (gameId, reviewId, updated) => {
    setGames(
      games.map((g) =>
        g.id === gameId
          ? {
              ...g,
              reviews: g.reviews.map((r) =>
                r.id === reviewId ? { ...r, ...updated } : r
              ),
            }
          : g
      )
    );
  };

  const deleteReview = (gameId, reviewId) => {
    setGames(
      games.map((g) =>
        g.id === gameId
          ? { ...g, reviews: g.reviews.filter((r) => r.id !== reviewId) }
          : g
      )
    );
  };

  return (
    <div className="container">
      <header>
        <h1>🎮 GameTracker (modo local)</h1>
      </header>

      <BibliotecaJuegos
        games={games}
        onAddGame={addGame}
        onDeleteGame={deleteGame}
        onUpdateGame={updateGame}
        onAddReview={addReview}
        onUpdateReview={updateReview}
        onDeleteReview={deleteReview}
      />
    </div>
  );
};

export default App;
