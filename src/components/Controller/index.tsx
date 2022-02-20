import React from 'react';
import { Container, Foreground, Background, ControllerColorType } from './styled';

interface ControllerColorProps {
  children: React.ReactNode;
  type: ControllerColorType;
}

function Controller({ children = null, type }: ControllerColorProps) {
  return (
    <Container>
      <Foreground type={type} />
      <Background type={type} />
      {children}
    </Container>
  );
}

export default Controller;
