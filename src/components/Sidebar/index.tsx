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
  currentPage: 'Home' | 'Time' | 'Season' | 'Weather';
}

function Sidebar({ type, currentPage }: SidebarColorProps) {
  return (
    <Container type={type}>
      <Logo />
      <Nav>
        <SlidingPointer page={currentPage} />
        <ButtonGroup>
          <Link to="/">
            <HomeButton isDark={currentPage === 'Home'} />
          </Link>
          <Link to="/time">
            <TimeButton isDark={currentPage === 'Time'} />
          </Link>
          <Link to="/season">
            <SeasonButton isDark={currentPage === 'Season'} />
          </Link>
          <Link to="/weather">
            <WeatherButton isDark={currentPage === 'Weather'} />
          </Link>
        </ButtonGroup>
      </Nav>
      <ForMargin />
    </Container>
  );
}

export default Sidebar;
