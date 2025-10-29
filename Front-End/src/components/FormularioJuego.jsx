function FormularioJuego(){
  return (
    <form className="game-form">
      <input placeholder="Título" />
      <input placeholder="Plataforma" />
      <input placeholder="URL de portada (opcional)" />
      <textarea placeholder="Descripción (opcional)" />
      <button type="button">Agregar</button>
    </form>
  );
};

export default FormularioJuego;
