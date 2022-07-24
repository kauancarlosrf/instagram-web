import styled from 'styled-components';
import Button from '@mui/material/Button';

export const BotaoOpenModal = styled.button`
  padding: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const Botao = styled(Button)`
  width: 100%;
  height: 47px;
  padding: 4px 8px;

  text-transform: capitalize !important;
  color: #262626 !important;
`;

export const Hr = styled.hr`
  width: 100%;
  height: 1px;

  color: grey;
  background-color: lightgrey;
`;
