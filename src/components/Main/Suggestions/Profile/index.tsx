import React from "react";
import { Container, Image, InformacoesConta, LinkNomeDaConta, NomeDoUsuario, MudarDeConta } from './style';
import { dadosUsuario } from "../../../../data/dados";

export default function Profile() {

  return(
    <Container>

      <Image src={dadosUsuario.userImg} alt={`Imagem de ${dadosUsuario.userName}`} />
      <InformacoesConta>
        <LinkNomeDaConta href={`/${dadosUsuario.nameAccount}/`}>{dadosUsuario.nameAccount}</LinkNomeDaConta>
        <NomeDoUsuario>{dadosUsuario.userName}</NomeDoUsuario>
      </InformacoesConta>
      <MudarDeConta>
        Mudar
      </MudarDeConta>

    </Container>
  );
}
