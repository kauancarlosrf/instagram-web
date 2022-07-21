import React from "react";
import { Image } from './style';


type Props = {
  imgPost: any;
}

export default function Meio(props: Props) {

  return (
    <>
      <Image src={props.imgPost} alt="Imagem | Vídeo | Carrossel | do Post" />
    </>
  );
}
