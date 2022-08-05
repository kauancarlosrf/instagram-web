import React from "react";
import { ButtonContainer, Border, Image, NomePerfil } from './style';


type Props = {
  imgPerfil: any;
  namePerfil: string;
  nameAccount: string;
}

export default function Item(props: Props) {
  let nome_formatado = props.nameAccount.substring(0, 9) + '...';

  return (
    <>
      <ButtonContainer href={`/stories/${props.nameAccount}/`}>
        <Border>
          <Image src={props.imgPerfil} alt={`${props.namePerfil}`} />
        </Border>
        <NomePerfil>
          {
            props.nameAccount.length > 10
            ? nome_formatado
            : props.nameAccount
          }
        </NomePerfil>
      </ButtonContainer>
    </>
  );
}
