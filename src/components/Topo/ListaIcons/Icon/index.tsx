import React, { ReactComponentElement } from 'react';
import {A} from './style';

type Icone = {
  children: ReactComponentElement<any>;
  link: string;
}

export default function Icon(props: Icone) {

  return (
    <>
      <A href={props.link}>
        {props.children}
      </A>
    </>
  );
}
