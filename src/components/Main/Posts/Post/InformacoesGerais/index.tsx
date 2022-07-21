import React from "react";
import { Container, QuantidadeCurtidas, ContainerDescricao, NomeDoPerfil, MostrarTodaDescricao, TempoAtras, VerMaisComentarios } from './style';

type Props = {
  quantidadeCurtidas: number;
  quantidadeComentarios: number;
  tempoAtras: string;
  nameAccount: string;
  descricao: string;
}

export default function InformacoesGerais(props: Props) {

  return (
    <Container>
      
      <QuantidadeCurtidas>
        {props.quantidadeCurtidas} curtida{props.quantidadeCurtidas>0 ? `s` : ``}
      </QuantidadeCurtidas>

      <ContainerDescricao>
        <NomeDoPerfil>{props.nameAccount} </NomeDoPerfil>
        <span>{props.descricao}</span>
        <MostrarTodaDescricao>... mais</MostrarTodaDescricao>
      </ContainerDescricao>

      <VerMaisComentarios>
        Ver {props.quantidadeComentarios} comentário
      </VerMaisComentarios>

      <TempoAtras>
        HÁ {props.tempoAtras}
      </TempoAtras>

    </Container>
  );
}
