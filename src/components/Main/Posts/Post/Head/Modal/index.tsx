import * as React from 'react';
//style:
import { BotaoOpenModal, Botao, Hr } from './style';
import clsx from 'clsx';
import { styled, Box, Theme } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: 400,
  height: 335,

  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  borderRadius: 3,
});

export default function ModalUnstyledDemo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <BotaoOpenModal type="button" onClick={handleOpen}>
        <MoreHorizIcon />
      </BotaoOpenModal>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        components={{ Backdrop }}
      >
        <Box sx={style}>
          <Botao color="error">Report</Botao>
            <Hr />
          <Botao color="error">Unfollow</Botao>
            <Hr />
          <Botao>Go to post</Botao>
            <Hr />
          <Botao>Share to...</Botao>
            <Hr />
          <Botao>Copy link</Botao>
            <Hr />
          <Botao>Embed</Botao>
            <Hr />
          <Botao onClick={handleClose}>Cancelar</Botao>
        </Box>
      </Modal>
    </div>
  );
}