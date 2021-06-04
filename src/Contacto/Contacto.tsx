import React, { useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { useFetchSuscription } from "./useFetchSuscription";

export const Contacto: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { PostSuscription, loading, success } = useFetchSuscription();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await PostSuscription({ name: name, email: email });
  };

  return (
    <div id="contacto" className="contacto-container">
      {!success && (
        <>
          <h2 className="suscribe-title">SUSCRÍBETE</h2>
          <p>Queda atento a las noticias de nuestra plataforma web</p>

          {!loading && (
            <form onSubmit={onSubmit}>
              <div className="inputs-container">
                <div className="field">
                  <label htmlFor="name">Nombres</label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    name="name"
                    placeholder="Ingrese sus nombres y apellidos"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Correo</label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    type="email"
                    name="email"
                    placeholder="Ingrese su correo"
                  />
                </div>
              </div>
              <div className="button">
                <button type="submit">Enviar</button>
              </div>
            </form>
          )}
          {loading && <Spinner />}
        </>
      )}
      {success && (
        <>
          <img width={83} height={83} src="/email-landing.svg" alt="wna" />
          <h2 className="title">Enhorabuena</h2>
          <p>Se ha suscrito exitosamente a nuestra plataforma.</p>
        </>
      )}
    </div>
  );
};
