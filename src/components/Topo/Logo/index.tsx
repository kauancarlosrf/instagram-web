import React from 'react';
import { LogoStyle, Container } from './style';

type Props = {
  href: string;
  image: any;
};

export default function Logo(props: Props) {

  return (
    <Container>
      <a href={props.href}>
        <LogoStyle src={props.image} alt="Logo do Instagram" />
      </a>
    </Container>
  );
}
