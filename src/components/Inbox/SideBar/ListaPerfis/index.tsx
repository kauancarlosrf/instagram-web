import React from "react";
import ItemPerfil from "./ItemPerfil";
import { Container } from './style';
import { listaDirects } from "../../../../data/dados";

export default function ListaPerfis() {

  return (
    <Container>
    
      {
        listaDirects.map((item, index) => (
          <ItemPerfil key={item.nameAccount} imgPerfil={item.imgPerfil} nameAccount={item.nameAccount} userName={item.userName} ultimaVezOnline={item.ultimaVezOnline} />
        ))
      }
    
    </Container>
  );
}
