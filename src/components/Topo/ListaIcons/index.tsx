import React from 'react';
import Icon from './Icon';
import { dadosUsuario } from '../../../data/dados';
import { UserProfileImage, Container } from './style';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function ListaIcons() {

  return (
    <>
      <Container>
        <Icon link='#'>
          <HomeOutlinedIcon sx={{ fontSize: 27 }} />
        </Icon>
        <Icon link='#'>
          <SendOutlinedIcon sx={{ fontSize: 27 }} />
        </Icon>
        <Icon link='#'>
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: 27 }} />
        </Icon>
        <Icon link='#'>
          <ExploreOutlinedIcon sx={{ fontSize: 27 }} />
        </Icon>
        <Icon link='#'>
          <FavoriteBorderOutlinedIcon sx={{ fontSize: 27 }} />
        </Icon>
        <UserProfileImage src={dadosUsuario.userImg} alt={`Foto do perfil de ${dadosUsuario.userName}`} />
      </Container>
    </>
  );
}
