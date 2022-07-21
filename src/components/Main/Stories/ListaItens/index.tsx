import React from "react";
import Item from "./Item";
import { listaStories } from "../../../../data/dados";

export default function ListaItens() {

  return (
    <>
      {listaStories.map((item, index) => (
        <Item key={item.nameAccount} imgPerfil={item.imgPerfil} namePerfil={item.nameAccount} nameAccount={item.nameAccount} />
      ))}
    </>
  );
}
