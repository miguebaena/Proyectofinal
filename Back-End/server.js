import express from "express";
import cors from "cors";
import gamesRouter from "./routes/games.js";

const app = express();
const PORT = 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/games", gamesRouter);

// Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
