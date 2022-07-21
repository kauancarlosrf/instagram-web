import React from "react";
import { Container } from './style';
import Head from "./Head";
import Meio from "./Meio";
import BarraLike from "./BarraLike";
import InformacoesGerais from "./InformacoesGerais";
import BarraComentario from "./BarraComentario";

type Props = {
  imgPerfil: any;
  nameAccount: string;
  imgPost: any;
  quantidadeCurtidas: number;
  quantidadeComentarios: number;
  tempoAtras : string;
  descricao: string;
};

export default function Post(props: Props) {

  return (
    <Container>
      <Head imgPerfil={props.imgPerfil} nameAccount={props.nameAccount} />
      <Meio imgPost={props.imgPost} />
      <BarraLike />
      <InformacoesGerais
        quantidadeCurtidas={props.quantidadeCurtidas}
        tempoAtras={props.tempoAtras}
        nameAccount={props.nameAccount}
        descricao={props.descricao}
        quantidadeComentarios={props.quantidadeComentarios}
      />
      <BarraComentario />
    </Container>
  );
}
