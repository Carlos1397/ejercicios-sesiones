import React from "react";
import { Contacto } from "../models/contacto.class";
import ContactoComponent from "../components/contactoComponent";
const contactoList = () => {
  const defaultContacto = new Contacto(
    "Carlos",
    "Viera",
    "carlose@gmail.com",
    true
  );

  return (
    <div>
      Contacto - List
      <ContactoComponent contacto={defaultContacto}></ContactoComponent>
    </div>
  );
};

export default contactoList;
