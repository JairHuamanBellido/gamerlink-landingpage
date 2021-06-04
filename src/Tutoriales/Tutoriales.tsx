import React from "react";
export const Tutoriales: React.FC = () => {
  return (
    <div id="tutoriales" className="tutoriales-container">
      <h2>VIDEO TUTORIALES</h2>
      <div className="line"></div>
      <p>
        Ofrecemos cursos por niveles por aprendizaje de múltiples juegos
        competitivos.{" "}
      </p>
      <div className="levels">
        <div className="level basic-level">
          <div className="title">
            <img src="/basic-level.png" width={32} height={32} />
            <p>Nivel Basico</p>
          </div>
          <div className="silabus">
            <p>Introducción</p>
            <p>Conceptos básicos</p>
            <p>Configuración del teclado</p>
            <p>Conociendo el entorno</p>
          </div>
        </div>
        <div className="level intermediate-level">
          <div className="title">
            <img src="/intermediate-level.png" width={32} height={32} />
            <p>Nivel Intermedio</p>
          </div>
          <div className="silabus">
            <p>Estrategias</p>
            <p>Técnicas de mejora de reflejos</p>
            <p>Atajos de teclado</p>
            <p>Habilidades comunicativas en misiones</p>
          </div>
        </div>
        <div className="level high-level">
          <div className="title">
            <img src="/high-level.png" width={32} height={32} />
            <p>Nivel Avanzado</p>
          </div>
          <div className="silabus">
            <p>Liderazgo de equipo</p>
            <p>Patrones de ataque y defensa</p>
            <p>Técnicas de prevención de riesgos</p>
            <p>Taller Final</p>
          </div>
        </div>
      </div>
    </div>
  );
};
