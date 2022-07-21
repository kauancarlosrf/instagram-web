import React from "react";
import { Container, Header, Image,NameAccount, MaisOpcoes } from './style';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
          <NameAccount>{props.nameAccount}</NameAccount>
        </Header>
        <MaisOpcoes>
          <MoreHorizIcon />
        </MaisOpcoes>
      </Container>
    </>
  );
}
