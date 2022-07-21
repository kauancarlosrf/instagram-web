import React from "react";
import { Container, Image, BoxNomePerfilEInformacoes, UserName, UltimasInformacoes } from './style';

type Props = {
  imgPerfil: any;
  userName: string;
  ultimaVezOnline: string;
};

export default function ItemPerfil(props: Props) {

  return (
    <Container>
      <Image src={props.imgPerfil} alt={`Imagem de ${props.userName}`} />

      <BoxNomePerfilEInformacoes>
        <UserName>
          {props.userName}
        </UserName>
        <UltimasInformacoes>
          Online há {props.ultimaVezOnline}
        </UltimasInformacoes>
      </BoxNomePerfilEInformacoes>
    </Container>
  );
}
