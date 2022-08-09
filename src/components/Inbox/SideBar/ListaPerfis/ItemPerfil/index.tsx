import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ContainerDisabled, ContainerActive, Image, BoxNomePerfilEInformacoes, UserName, UltimasInformacoes } from './style';

type Props = {
  imgPerfil: any;
  userName: string;
  nameAccount: string;
  ultimaVezOnline: string;
};

export default function ItemPerfil(props: Props) {
  const [active, setActive] = useState(false);
  // ver como posso resolver o possível problema de mais de um estar ativo ao mesmo tempo...

  function ativarItem() {
    setActive(true);
    window.location.href = `/direct/t/${props.nameAccount}`;
  }

  return (
    <>
    {
      active === false
      ?
      <ContainerDisabled onClick={ativarItem}>
        <Image src={props.imgPerfil} alt={`Imagem de ${props.userName}`} />

        <BoxNomePerfilEInformacoes>
          <UserName>
            {props.userName}
          </UserName>
          <UltimasInformacoes>
            Online há {props.ultimaVezOnline}
          </UltimasInformacoes>
        </BoxNomePerfilEInformacoes>
      </ContainerDisabled>

      :
      <ContainerActive onClick={ativarItem}>
        <Image src={props.imgPerfil} alt={`Imagem de ${props.userName}`} />

        <BoxNomePerfilEInformacoes>
          <UserName>
            {props.userName}
          </UserName>
          <UltimasInformacoes>
            Online há {props.ultimaVezOnline}
          </UltimasInformacoes>
        </BoxNomePerfilEInformacoes>
      </ContainerActive>
    }
    </>
  );
}
