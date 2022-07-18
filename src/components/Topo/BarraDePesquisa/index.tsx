import React from 'react';
import { BoxPesquisa, CampoDePesquisa } from './style';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

type Props = {
  placeholder: string;
};

export default function App(props: Props) {
  return (
    <>
      <BoxPesquisa>
        <SearchOutlinedIcon />
        <CampoDePesquisa type={'search'} placeholder={props.placeholder} />
      </BoxPesquisa>
    </>
  );
}
