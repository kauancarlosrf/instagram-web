import React from "react";
import SideBar from "./SideBar";
import BoxMensagens from './BoxMensagens';
import  { Container, BoxMain } from './style';
import { dadosUsuario } from "../../data/dados";

export default function Inbox() {

  return (
    <Container>

      <BoxMain>

        <SideBar nameAccount={dadosUsuario.nameAccount} />

        <BoxMensagens />

      </BoxMain>

    </Container>
  );
}
