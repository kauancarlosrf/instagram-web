import { useState } from "react";
import ListaPerfis from "./ListaPerfis";
import { Container, BoxChangeAccount, BotaoTrocarDeConta, DivBotaoFecharModal, BotaoXFecharModal, Image, FormLogin, CampoDeTexto, LabelCaixinhaSalvarInformacoes, 
  SalvarInformacoesTxt, BotaoLogar, BotaoLogarDisabled, DivEsqueceuASenha, EsqueceuASenha } from './style';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoImg from '../../../assets/images/logo.png';
import CloseIcon from '@mui/icons-material/Close';
// ------- modal ------------------------------------------------------------------------------------------------
import * as React from 'react';
import clsx from 'clsx';
import { styled, Box, Theme } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Checkbox from '@mui/material/Checkbox';

type Props = {
  nameAccount: string;
}

const BackdropUnstyled = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: 400,
  height: 405,

  borderRadius: 3,

  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
});

export function ModalUnstyledDemo(props: Props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO PEGAR DADOS E USAR PRA FAZER A VERIFICAÇÃO ETC...
    console.log(`Email: ${email}, senha: ${senha}`);
    setEmail('');
    setSenha('');
  }

  return (
    <div>
      <BotaoTrocarDeConta type="button" onClick={handleOpen}>
        {props.nameAccount} <ExpandMoreIcon sx={{ fontSize: 32 }} />
      </BotaoTrocarDeConta>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        components={{ Backdrop }}
      >
        <Box sx={style}>
          <DivBotaoFecharModal>
            <BotaoXFecharModal onClick={handleClose}><CloseIcon sx={{ fontSize: 28 }} /></BotaoXFecharModal>
          </DivBotaoFecharModal>

          <Image src={LogoImg} alt={'Logo do Instagram'} />

          <FormLogin onSubmit={handleSubmit}>
            
            <CampoDeTexto value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Telefone, nome de usuário ou email" />
            <CampoDeTexto value={senha} onChange={(e) => {setSenha(e.target.value)}} type="password" placeholder="Senha" />

            {/* //TODO ARRUMAR ISTO POR CONTA DE ESTAR CENTRALIZADO POR CAUSA DO COLUMN */}

            <LabelCaixinhaSalvarInformacoes>
              <Checkbox /><SalvarInformacoesTxt>Salvar informações de login</SalvarInformacoesTxt>
            </LabelCaixinhaSalvarInformacoes>

            {email.length >= 1 && senha.length >= 6
              ? <BotaoLogar type="submit" >Entrar</BotaoLogar>
              : <BotaoLogarDisabled type="submit" disabled >Entrar</BotaoLogarDisabled>
            }

            <DivEsqueceuASenha>
              <EsqueceuASenha href="/accounts/password/reset/">
                Esqueceu a senha?
              </EsqueceuASenha>
            </DivEsqueceuASenha>
            
          </FormLogin>
        </Box>
      </Modal>
    </div>
  );
}

export default function SideBar(props: Props) {

  return (
    <Container>

      <BoxChangeAccount>
        <ModalUnstyledDemo nameAccount={props.nameAccount} />
      </BoxChangeAccount>
      
      <ListaPerfis />

    </Container>
  );
}
