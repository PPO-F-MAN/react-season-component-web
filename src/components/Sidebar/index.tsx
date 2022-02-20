import React from 'react';
import * as Styled from './styled';

import { useAppSelector } from '../../redux/configStore.hooks';

function Sidebar() {
  const currentTheme = useAppSelector(state => state.theme.currentTheme);
  return <Styled.Container theme={currentTheme} />;
}

export default Sidebar;
