import React from "react";
import { Container, Image, InformacoesConta, LinkNomeDaConta, NomeDoUsuario, SeguirAConta } from './style';
import { sugestoesParaSeguir } from "../../../../data/dados";


export default function Suggestion() {

  return(
    <>
      {
        sugestoesParaSeguir.map((item, index) => (
          <Container>

            <Image src={item.imgPerfil} alt={`Imagem de ${item.nameAccount}`} />
            <InformacoesConta>
              <LinkNomeDaConta href={`/${item.nameAccount}/`}>{item.nameAccount}</LinkNomeDaConta>
              <NomeDoUsuario>{item.userName}</NomeDoUsuario>
            </InformacoesConta>
            <SeguirAConta>
              Seguir
            </SeguirAConta>
    
          </Container>
        ))
      }
    </>
  );
}
