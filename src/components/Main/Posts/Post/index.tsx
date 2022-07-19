import React from "react";
import { Container } from './style';
import Head from "./Head";
import Meio from "./Meio";
import BarraLike from "./BarraLike";
import InformacoesGerais from "./InformacoesGerais";
import BarraComentario from "./BarraComentario";


export default function Post() {

  return (
    <Container>
      <Head />
      <Meio />
      <BarraLike />
      <InformacoesGerais />
      <BarraComentario />
    </Container>
  );
}
