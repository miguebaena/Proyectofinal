import React, { useMemo } from "react";

const EstadisticasPersonales = ({ games }) => {
  const stats = useMemo(() => {
    const total = games.length;
    const totalReseñas = games.reduce(
      (s, g) => s + (g.reseñas ? g.reseñas.length : 0),
      0
    );
    return { total, totalReseñas };
  }, [games]);

  return (
    <div className="stats">
      <div>🎮 Juegos: {stats.total}</div>
      <div>📝 Total de reseñas: {stats.totalReseñas}</div>
    </div>
  );
};

export default EstadisticasPersonales;