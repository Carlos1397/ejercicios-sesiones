import React from "react";

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>Ejemplo - de children props</h1>
      <h2>Nombre: {props.nombre}</h2>
      {/*props.children pintara por defecto aquello que se encuentre de apertura y cierre
      de este componente desde el component de orden superior */}
      {props.children}
    </div>
  );
};

export default Ejemplo4;
