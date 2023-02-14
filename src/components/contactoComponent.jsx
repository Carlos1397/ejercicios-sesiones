import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";
import { ESTADO } from "../models/estado.enum";

const contactoComponent = ({ contacto }) => {
  return (
    <div>
      Contacto - Componente
      <h2>Nombre: {contacto.nombre}</h2>
      <h2>Apellido: {contacto.apellido}</h2>
      <h2>Email: {contacto.email}</h2>
      <h2>
        Conectado:{" "}
        <span
          style={{
            color: contacto.conectado ? "green" : "red",
          }}
        >
          {contacto.conectado ? ESTADO.CONNECTED : ESTADO.OFFLINE}
        </span>
      </h2>
    </div>
  );
};

contactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default contactoComponent;
