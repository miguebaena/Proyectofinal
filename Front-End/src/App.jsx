import React, { useState } from "react";
import BibliotecaJuegos from "./components/BibliotecaJuegos.jsx";

const App = () => {
  const [games, setGames] = useState([]);

  return (
    <div className="container">
      <header>
        <h1>🎮 GameTracker Miguel Baena</h1>
      </header>
      <BibliotecaJuegos games={games} setGames={setGames} />
    </div>
  );
};

export default App;
