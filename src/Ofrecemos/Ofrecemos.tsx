import React from "react";

export const Ofrecemos: React.FC = () => {
  return (
    <div className="ofrecemos-container">
      <h2>QUE OFRECEMOS</h2>

      <div className="card-container">
        <div className="card aprendizaje">
          <p className="title">Plataforma de aprendizaje</p>
          <p className="description">
            Accede a contenidos de aprendizaje dictados por gamers profesionales
          </p>
        </div>
        <div className="card coach">
          <p className="title">Coach</p>
          <p className="description">Conécta con muchos coachs y mejorar la habilidad de tu equipo</p>
        </div>
      </div>
    </div>
  );
};
