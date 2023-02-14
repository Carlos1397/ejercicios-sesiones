/**
 * Ejemplo de uso de
 * useState
 * useRef
 * useEffect
 */
import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // vamos a crear una referencia con useRef() para asociar una variable
  // con un elemento del dom del componente (vista html)
  const myRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }
  function incrementar2() {
    setContador2(contador2 + 1);
  }

  /**
   * trabajando con UssEffect
   * ? caso 1: ejecutar siempre un snippet de codigo
   * se ejecuta aquello que estem dentro del useEffect
   */

  //   useEffect(() => {
  //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
  //     console.log("MOSTRANDO REF DE REFERENCIA A ELEMENTO DEL DOM");
  //     console.log(myRef);
  //   });

  /**
   * ejecutar cuando solo haya un cambio en el contador uno
   */
  //   useEffect(() => {
  //     console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1");
  //     console.log("MOSTRANDO REF DE REFERENCIA A ELEMENTO DEL DOM");
  //     console.log(myRef);
  //   }, [contador1]);

  /**
   * caso 3 cuando haya un cambio de contador 1 o contador 2
   */

  useEffect(() => {
    console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1 / contador 2");
    console.log("MOSTRANDO REF DE REFERENCIA A ELEMENTO DEL DOM");
  }, [contador1, contador2]);

  return (
    <div>
      <h1>Ejemplo2 - UseState -- useRef -- useEffect</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/*ELEMENTO REFERENCIADO*/}

      <h4 ref={myRef}>Ejemplo de elemento REFERENCIADO</h4>
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
      </div>
      <div>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
