import React from "react";
import ListaPerfis from "./ListaPerfis";
import { Container, BoxChangeAccount } from './style';

type Props = {
  nameAccount: string;
}

export default function SideBar(props: Props) {

  return (
    <Container>

      <BoxChangeAccount>
        {/* //TODO BOTAO PARA ABRIR MODAL PRA TROCAR DE CONTA
          campo select com a conta logada e a opção pra trocar de conta... */
        }
        <select name="" id="">
          <option value="">{props.nameAccount}</option>
        </select>
      </BoxChangeAccount>
      
      <ListaPerfis />

    </Container>
  );
}
