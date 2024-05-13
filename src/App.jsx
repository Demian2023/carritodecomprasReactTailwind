import React from "react";
import { Productos } from "./Productos";
import { Filtros } from "./Filtros";
import { Carrito } from './Carrito';
import { LogicaCarrito } from "./LogicaCarrito";

export const Contexto = React.createContext()

function App() {
  const logica = LogicaCarrito();
  return (
    <>
      <Contexto.Provider value={logica}>
        <Carrito/>
        <Filtros/>
        <Productos/>
      </Contexto.Provider>
    </>
  )
}

export default App
