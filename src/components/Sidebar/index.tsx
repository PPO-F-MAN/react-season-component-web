import React from 'react';
import { Container, SidebarColorType } from './styled';

interface SidebarColorProps {
  type: SidebarColorType;
}

function Sidebar({ type }: SidebarColorProps) {
  return <Container type={type} />;
}

export default Sidebar;
