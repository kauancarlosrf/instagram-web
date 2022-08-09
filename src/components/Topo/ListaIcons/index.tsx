import React from 'react';
import Icon from './Icon';
import Popover from './Popover';
import { Container } from './style';

import { AiOutlineHome, AiOutlineHeart } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { BiPlusCircle } from 'react-icons/bi';
import { MdOutlineExplore } from 'react-icons/md';

export default function ListaIcons() {

  return (
    <>
      <Container>
        <Icon link='/'>
          <AiOutlineHome style={{ width: 27, height: 27 }} />
        </Icon>
        <Icon link='/direct/inbox/'>
          <RiMessengerLine style={{ width: 27, height: 27 }} />
        </Icon>
        <Icon link='#'>
          <BiPlusCircle style={{ width: 27, height: 27 }} />
        </Icon>
        <Icon link='/explore/'>
          <MdOutlineExplore style={{ width: 27, height: 27 }} />
        </Icon>
        <Icon link='#'>
          <AiOutlineHeart style={{ width: 27, height: 27 }} />
        </Icon>
        <Popover />
      </Container>
    </>
  );
}
