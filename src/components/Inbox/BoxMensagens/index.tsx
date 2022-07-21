import React from "react";
import { Container, IconeMensagens, Titulo, SubTitulo, BotaoEstranhoEnviarMensagem } from "./style";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function BoxMensagens() {

  return (
    <Container>
      <IconeMensagens>
        <SendOutlinedIcon sx={{ fontSize: 60 }} />
      </IconeMensagens>

      <Titulo>Suas mensagens</Titulo>
      <SubTitulo>Envie fotos e mensagens privadas para um amigo ou grupo.</SubTitulo>

      <BotaoEstranhoEnviarMensagem>
        Enviar mensagem
      </BotaoEstranhoEnviarMensagem>
    </Container>
  );
}
