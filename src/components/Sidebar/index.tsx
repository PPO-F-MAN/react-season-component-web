import React from 'react';
import {
  Container,
  SidebarColorType,
  Logo,
  // ButtonGroup,
  // HomeButton,
  // TimeButton,
  // SeasonButton,
  // WeatherButton,
  // SlidingPointer,
} from './styled';

interface SidebarColorProps {
  type: SidebarColorType;
}

function Sidebar({ type }: SidebarColorProps) {
  return (
    <Container type={type}>
      <Logo />
      {/* <ButtonGroup>
        <HomeButton />
        <TimeButton />
        <SeasonButton />
        <WeatherButton />
        <SlidingPointer />
      </ButtonGroup> */}
    </Container>
  );
}

export default Sidebar;
