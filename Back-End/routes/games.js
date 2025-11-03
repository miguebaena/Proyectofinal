import express from "express";

const router = express.Router();

// Datos temporales (memoria)
let games = [];

// ====== RUTAS CRUD ======

// ✅ GET → obtener todos los juegos
router.get("/", (req, res) => {
  res.json(games);
});

// ✅ POST → agregar un nuevo juego
router.post("/", (req, res) => {
  const nuevoJuego = { id: Date.now(), ...req.body };
  games.push(nuevoJuego);
  res.status(201).json(nuevoJuego);
});

// ✅ PUT → editar un juego existente
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const index = games.findIndex((g) => g.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "Juego no encontrado" });
  }

  games[index] = { ...games[index], ...req.body };
  res.json(games[index]);
});

// ✅ DELETE → eliminar un juego
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  games = games.filter((g) => g.id != id);
  res.json({ message: "Juego eliminado correctamente" });
});

export default router;
