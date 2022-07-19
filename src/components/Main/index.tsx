import React from "react";
import Stories from './Stories';
import Posts from './Posts';
import { ContainerPrincipal, ContainerInteiro } from './style';
import Suggestions from "./Suggestions";

export default function Main() {

  return (
    <ContainerInteiro>

      <ContainerPrincipal>
        <Stories />
        <Posts />
      </ContainerPrincipal>

      <Suggestions />
      
    </ContainerInteiro>
  );
}
