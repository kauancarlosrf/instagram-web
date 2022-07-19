import React from "react";
import { ButtonContainer, Border, Image, NomePerfil } from './style';


type Props = {
  imgPerfil: any;
  namePerfil: string;
}

export default function Item(props: Props) {

  return (
    <>
      <ButtonContainer>
        <Border>
          <Image src={props.imgPerfil} alt={`${props.namePerfil}`} />
        </Border>
        <NomePerfil>{props.namePerfil}</NomePerfil>
      </ButtonContainer>
    </>
  );
}