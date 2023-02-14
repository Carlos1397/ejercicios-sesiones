import ContactoList from "../src/container/contactoList";
import Ejemplo1 from "../src/hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import Ejemplo3 from "./hooks/Ejemplo3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        {" "}
        <h1>Ejercicios - Sesiones</h1>
        <ContactoList></ContactoList>
        <Ejemplo1></Ejemplo1>
        <Ejemplo2></Ejemplo2>
        <h1>Sesiones entre Componentes</h1>
        <Ejemplo3></Ejemplo3>
      </div>
    </div>
  );
}

export default App;
