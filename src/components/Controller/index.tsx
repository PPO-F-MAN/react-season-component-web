import React from 'react';
import * as Styled from './styled';

function Controller({ children }: { children: React.ReactNode }) {
  return <Styled.Container>{children}</Styled.Container>;
}

export default Controller;
