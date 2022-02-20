import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  SidebarColorType,
  Logo,
  ButtonGroup,
  HomeButton,
  TimeButton,
  SeasonButton,
  WeatherButton,
  ForMargin,
  SlidingPointer,
  Nav,
} from './styled';

interface SidebarColorProps {
  type: SidebarColorType;
}

function Sidebar({ type }: SidebarColorProps) {
  return (
    <Container type={type}>
      <Logo />
      <Nav>
        <ButtonGroup>
          <Link to="/">
            <HomeButton />
          </Link>
          <Link to="/time">
            <TimeButton />
          </Link>
          <Link to="/season">
            <SeasonButton />
          </Link>
          <Link to="/weather">
            <WeatherButton />
          </Link>
        </ButtonGroup>
        <div>
          <SlidingPointer />
        </div>
      </Nav>
      <ForMargin />
    </Container>
  );
}

export default Sidebar;
