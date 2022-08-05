import React, { useState } from "react";
import { Container, QuantidadeCurtidas, BoxDescricao, NomeDoPerfil, MostrarTodaDescricao, TempoAtras, VerMaisComentarios } from './style';

type Props = {
  id: number;
  quantidadeCurtidas: number;
  quantidadeComentarios: number;
  tempoAtras: string;
  nameAccount: string;
  descricao: string;
}

export default function InformacoesGerais(props: Props) {
  const [mostarMais, setMostrarMais] = useState(false);
  const preview_descricao = props.descricao.substring(0, 60);

  return (
    <Container>
      
      <QuantidadeCurtidas>
        {props.quantidadeCurtidas} curtida{props.quantidadeCurtidas>0 ? `s` : ``}
      </QuantidadeCurtidas>

      <BoxDescricao>
        <NomeDoPerfil href={`/${props.nameAccount}/`}>{props.nameAccount} </NomeDoPerfil>
        {
          mostarMais === false
          ? <span>{preview_descricao}</span>
          : <span>{props.descricao}</span>
        }
        {
          mostarMais === false
          ? <MostrarTodaDescricao onClick={() => {setMostrarMais(true)}}>... mais</MostrarTodaDescricao>
          : <></>
        }
        
      </BoxDescricao>

      <VerMaisComentarios>
        Ver {props.quantidadeComentarios} comentário
      </VerMaisComentarios>

      <TempoAtras>
        HÁ {props.tempoAtras}
      </TempoAtras>

    </Container>
  );
}
