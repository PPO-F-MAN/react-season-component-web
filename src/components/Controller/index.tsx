import React from 'react';
import * as Styled from './styled';

import { useAppSelector } from '../../redux/configStore.hooks';

function Controller({ children }: { children: React.ReactNode }) {
  const currentTheme = useAppSelector(state => state.theme.currentTheme);
  return <Styled.Container theme={currentTheme}>{children}</Styled.Container>;
}

export default Controller;
