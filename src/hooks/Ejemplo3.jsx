/**
 * Ejemplo Hooks
 * --useState
 * --useContext
 */
import React, { useState, useContext } from "react";

/**
 *
 * @returns Componente 1
 * dispone de un contexto que va a tener un valor
 * que recive desde el padre
 */
const miContexto = React.createContext(null);
const Componente1 = () => {
  //inicializamos un estado vacio que va a rellenarse con los
  // datos del contexto del padre
  const state = useContext(miContexto);
  return (
    <div>
      Componente 1<h1>el token es: {state.token}</h1>
      {/*pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
};
const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      Componente 2{/*pintamos el componente 2 */}
      <h1>la sesion es: {state.sesion}</h1>
    </div>
  );
};
export default function miContextoE() {
  const estadoIncial = {
    token: "23344",
    sesion: 1,
  };

  // creamos el estado del componente
  const [sesionData, setsesionData] = useState(estadoIncial);

  function actualizarSesion() {
    setsesionData({
      token: "JWT23432",
      sesion: sesionData.sesion + 1,
    });
  }
  return (
    <miContexto.Provider value={sesionData}>
      {/* Todo lo que esta aquí dentro puede leer datos de sessinData */}
      {/* Ademas, sí se actualiza, los componentes de aquí, también lo actualizan */}
      <h1>Token: {sesionData.token}</h1>
      <h1>session: {sesionData.sesion}</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualiza</button>
    </miContexto.Provider>
  );
}
