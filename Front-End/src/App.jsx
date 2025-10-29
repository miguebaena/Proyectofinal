import React from "react";
import BibliotecaJuegos from "./components/BibliotecaJuegos.jsx";

function App(){
  return (
    <div className="container">
      <title>GameTracker Miguel Baena</title>
      <header>
        <h1>GameTracker Miguel Baena</h1>
      </header>
      <main>
        <BibliotecaJuegos />
      </main>
    </div>
  );
};

export default App;