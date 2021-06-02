import React from "react";

export const Contacto: React.FC = () => {
  return (
    <div className="contacto-container">
      <img width={83} height={83} src="/email-landing.svg" alt="wna" />
      <h2>SUSCRÍBETE</h2>
      <p>Queda atento a las noticias de nuestra plataforma web</p>

      <form>
        <div className="inputs-container">
          <div className="field">
            <label htmlFor="name">Nombres</label>
            <input
              type="text"
              name="name"
              placeholder="Ingrese sus nombres y apellidos"
            />
          </div>
          <div className="field">
            <label htmlFor="email">Correo</label>
            <input type="email" name="email" placeholder="Ingrese su correo" />
          </div>
        </div>
        <div className="button">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
