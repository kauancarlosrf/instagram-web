import React from 'react';
import ListaIcons from './ListaIcons';
import Logo from './Logo';
import BarraDePesquisa from './BarraDePesquisa';
//style
import { TopoCompleto, MenuTopo } from './style';
//icons e images
import LogoInstagramImg from '../../assets/images/logo.png';


export default function Topo() {

  return (
    <>
      <TopoCompleto>

        <MenuTopo>
          <Logo href="#" image={LogoInstagramImg} />
          
          <BarraDePesquisa placeholder='Pesquisar' />

          <ListaIcons />
          
        </MenuTopo>

      </TopoCompleto>
    </>
  );
}
