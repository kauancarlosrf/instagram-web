import React, { useState } from "react";
import { Container, Form, BotaoEmojis, CampoDeTexto, BotaoPublicar, BotaoPublicarDisabled } from './style';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function BarraComentario() {
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Peguei o comentário: ${comentario}`);
    setComentario('');
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Form>

        <BotaoEmojis>
          <SentimentSatisfiedAltIcon sx={{ fontSize: 27 }} />
        </BotaoEmojis>
        
        <CampoDeTexto type="text" placeholder="Adicione um comentário..." onChange={(e) => {setComentario(e.target.value)}} value={comentario} />

        {comentario !== ''
          ? <BotaoPublicar type="submit">Publicar</BotaoPublicar>
          : <BotaoPublicarDisabled type="submit" disabled>Publicar</BotaoPublicarDisabled>
        }

      </Form>
    </Container>
  );
}
