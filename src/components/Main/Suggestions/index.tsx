import React from "react";
import { Container, DivSugestoesParaVoceTxt, SugestoesParaVoceTxt, BotaoVerTodasSugestoes } from './style';
import Profile from "./Profile";
import Suggestion from "./Suggestion";
import PoliticaEPrivacidadeEAfins from "./PoliticaEPrivacidadeEAfins";

export default function Suggestions() {

  return (
    <Container>

      <Profile />

      <DivSugestoesParaVoceTxt>
        <SugestoesParaVoceTxt>
          Sugestões para você
        </SugestoesParaVoceTxt>
        <BotaoVerTodasSugestoes href="#">
          Ver tudo
        </BotaoVerTodasSugestoes>
      </DivSugestoesParaVoceTxt>

      <Suggestion />

      <PoliticaEPrivacidadeEAfins />

    </Container>
  );
}
