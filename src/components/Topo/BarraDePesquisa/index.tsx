import React, { useState } from 'react';
import { BoxPesquisa, CampoDePesquisa } from './style';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

type Props = {
  placeholder: string;
};

export default function App(props: Props) {
  const [pesquisa, setPesquisa] = useState('');
  const [lupa, setLupa] = useState(true);

  return (
    <BoxPesquisa>
      {
        lupa === true ? <SearchOutlinedIcon /> : <></>
      }
      <CampoDePesquisa
        onFocus={() => {setLupa(false)}}
        onBlur={() => {setLupa(true)}}
        type={'search'}
        placeholder={props.placeholder}
        onChange={(e) => {setPesquisa(e.target.value)}}
        value={pesquisa}
      />
    </BoxPesquisa>
  );
}
