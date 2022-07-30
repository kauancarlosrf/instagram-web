import React from "react";
import { Container, Header, Image,NameAccount, MaisOpcoes } from './style';
import Modal from './Modal';

type Props = {
  imgPerfil: any;
  nameAccount: string;
}

export default function Head(props: Props) {

  return (
    <>
      <Container>
        <Header>
          <Image src={props.imgPerfil} alt={`Imagem de ${props.nameAccount}`} />
          <NameAccount href={`/${props.nameAccount}/`}>{props.nameAccount}</NameAccount>
        </Header>
        <MaisOpcoes >
          <Modal />
        </MaisOpcoes>
      </Container>
    </>
  );
}
