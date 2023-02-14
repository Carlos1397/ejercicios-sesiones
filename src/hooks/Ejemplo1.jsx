import React, { useState } from "react";

const Ejemplo1 = () => {
  // valor incial
  const valorIncial = 0;

  // valor inicial para una persona

  const personaInicial = {
    nombre: "Carlos V.",
    email: "carlos@gmail.com",
  };
  /**
   * valor inicial sean parte del estado del componete asi poder gestionar su cambio en la vista del componente
   */
  const [contador, setContador] = useState(valorIncial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * función para cambiar el estado del contador
   */
  const incrementarContador = () => setContador(contador + 1);

  /**
   * @param{string} nombre
   * @param{string} email
   */
  const actualizaPersona = () => {
    setPersona({
      nombre: "liz",
      email: "lis@gmail.com",
    });
  };

  return (
    <div className="flex-direction: row; display: flex;">
      <h1>Ejemplo1 - **UseState</h1>
      <h2>Contador: {contador}</h2>
      <h2>Nombre: {persona.nombre}</h2>
      <h2>Email: {persona.email}</h2>
      <div>
        <button onClick={incrementarContador}> Incrementa Contador </button>{" "}
        <button onClick={actualizaPersona}>Actualiza Persona</button>
      </div>
    </div>
  );
};

export default Ejemplo1;
