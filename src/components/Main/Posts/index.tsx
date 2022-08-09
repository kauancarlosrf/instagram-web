import React from "react";
import Post from "./Post";
import { Container } from './style';
import { dadosPosts } from "../../../data/dados";

export default function Posts() {

  return (
    <Container>
      {
        dadosPosts.map((item, index) => (

          <Post
            key={item.id}
            id={item.id}
            imgPerfil={item.imgPerfil}
            nameAccount={item.nameAccount}
            imgPost={item.imgPost}
            quantidadeCurtidas={item.quantidadeCurtidas}
            tempoAtras={item.tempoAtras}
            descricao={item.descricao}
            quantidadeComentarios={item.quantidadeComentarios}
          />

        ))
      }
    </Container>
  );
}
