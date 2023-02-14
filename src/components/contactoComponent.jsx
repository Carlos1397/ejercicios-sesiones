import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";
import { ESTADO } from "../models/estado.enum";

const contactoComponent = ({ contacto }) => {
  return (
    <div>
      Contacto - Componente
      <h2>Nombre: {contacto.nombre}</h2>
      <h3>Apellido: {contacto.apellido}</h3>
      <h4>Email: {contacto.email}</h4>
      <h5>
        Conectado:{" "}
        <span
          style={{
            color: contacto.conectado ? "green" : "red",
          }}
        >
          {contacto.conectado ? ESTADO.CONNECTED : ESTADO.OFFLINE}
        </span>
      </h5>
    </div>
  );
};

contactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default contactoComponent;
