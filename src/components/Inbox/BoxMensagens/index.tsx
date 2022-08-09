import React from "react";
import { Container, IconeMensagens, Titulo, SubTitulo, BotaoEstranhoEnviarMensagem } from "./style";
import { FiSend } from 'react-icons/fi';

export default function BoxMensagens() {

  return (
    <Container>
      <IconeMensagens>
        <FiSend style={{ width: 50, height: 50, color: '#383838', marginRight: 10 }} />
      </IconeMensagens>

      <Titulo>Suas mensagens</Titulo>
      <SubTitulo>Envie fotos e mensagens privadas para um amigo ou grupo.</SubTitulo>

      <BotaoEstranhoEnviarMensagem>
        Enviar mensagem
      </BotaoEstranhoEnviarMensagem>
    </Container>
  );
}
