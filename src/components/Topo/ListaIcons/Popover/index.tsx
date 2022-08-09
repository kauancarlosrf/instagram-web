import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { dadosUsuario } from '../../../../data/dados';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/Auth/AuthContext';
import Menu from '@mui/material/Menu';
import { Divider } from '@mui/material';
import { BotaoOpenPopover, UserProfileImage, Container, MenuItem } from './style';
import { GrBookmark } from 'react-icons/gr';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { RiSettings3Line } from 'react-icons/ri';
import { MdOutlineChangeCircle } from 'react-icons/md';

export default function BasicMenu() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Perfil = () => {
    handleClose();
    navigate(`/${dadosUsuario.nameAccount}/`);
  }

  const Salvos = () => {
    handleClose();
    navigate(`/${dadosUsuario.nameAccount}/salvos/`);
  }

  const Configuracoes = () => {
    handleClose();
    navigate(`/accounts/settings/edit/`);
  }

  const TrocarDeConta = () => {
    handleClose();
  }

  const Logout = async () => {
    await auth.signOut();
  }

  return (
    <div>
      <BotaoOpenPopover
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <UserProfileImage src={dadosUsuario.userImg} alt={`Foto do perfil de ${dadosUsuario.userName}`} />
      </BotaoOpenPopover>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        style={{ marginTop: 10 }}
      >
        <Container>
          <MenuItem onClick={Perfil}><MdOutlineAccountCircle style={{width: 20, fontSize: 20}} />Perfil</MenuItem>
          <MenuItem onClick={Salvos}><GrBookmark style={{width: 20, fontSize: 18}} />Salvos</MenuItem>
          <MenuItem onClick={Configuracoes}><RiSettings3Line style={{width: 20, fontSize: 20}} />Configurações</MenuItem>
          <MenuItem onClick={TrocarDeConta}><MdOutlineChangeCircle style={{width: 20, fontSize: 20}} />Trocar de conta</MenuItem>
          <Divider />
          <MenuItem onClick={Logout}>Sair</MenuItem>
        </Container>
      </Menu>
    </div>
  );
}
