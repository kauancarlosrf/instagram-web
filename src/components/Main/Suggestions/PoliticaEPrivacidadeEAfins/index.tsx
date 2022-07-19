import React from "react";
import { Container, Link, Copy, Epacamento } from './style';

export default function PoliticaEPrivacidadeEAfins() {

  return (
    <Container>
      <div>
        <Link>Sobre</Link>
        <Epacamento> · </Epacamento>
        <Link>Ajuda</Link>
        <Epacamento> · </Epacamento>
        <Link>Imprensa</Link>
        <Epacamento> · </Epacamento>
        <Link>API</Link>
        <Epacamento> · </Epacamento>
        <Link>Carreiras</Link>
        <Epacamento> · </Epacamento>
        <Link>Privacidade</Link>
        <br />
        <Link>Termos</Link>
        <Epacamento> · </Epacamento>
        <Link>Localização</Link>
        <Epacamento> · </Epacamento>
        <Link>Idioma</Link>
      </div>

      <Copy>
        &copy; 2022 INSTAGRAM FROM META
      </Copy>
    </Container>
  );
}
