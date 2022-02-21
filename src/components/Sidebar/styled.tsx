import React from 'react';
import styled from '@emotion/styled';
import { TimeTypeProps } from '../../types';

export type SidebarColorType =
  | 'auto'
  | 'spring'
  | 'summer'
  | 'autumn'
  | 'winter'
  | TimeTypeProps
  | 'sunny'
  | 'cloudy'
  | 'rainy'
  | 'snowy';

export const Container = styled.div<{ type: SidebarColorType }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  z-index: 1000;
  background-color: ${({ type }) => {
    switch (type) {
      case 'spring':
        return '#FBB7C4';
      case 'summer':
        return '#7BB6BA';
      case 'autumn':
        return '#FF6065';
      case 'winter':
        return '#BFC3E6';
      case 'morning':
        return '#FF8460';
      case 'day':
        return '#87C0F2';
      case 'evening':
        return '#083167';
      case 'night':
        return '#080808';
      case 'sunny':
        return '#6ACAFF';
      case 'cloudy':
        return '#F8E7F8';
      case 'rainy':
        return '#142374';
      default:
        return '#4B728B';
    }
  }};
`;

// TODO: Logo,
// ButtonGroup,
// HomeButton,
// TimeButton,
// SeasonButton,
// WeatherButton,
// SlidingPointer,

export const Logo = styled.div`
  /* background-image: url('https://github.com/PPO-F-MAN/react-season-component-web/blob/develop/public/react-season-component-logo.png?raw=true'); */
  background-image: url(${process.env.PUBLIC_URL}/react-season-component-logo.png);
  background-size: cover;
  width: 80px;
  height: 80px;
  margin-top: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeButton = styled.div<{ isDark: boolean }>`
  position: relative;
  /* background-image: url(${({ isDark }) => (isDark ? 'home_dark.png' : 'home_light.png')}); */
  /* background-image: ${({ isDark }) =>
    isDark
      ? 'url("https://github.com/PPO-F-MAN/react-season-component-web/blob/develop/public/home_dark.png?raw=true")'
      : 'url("https://github.com/PPO-F-MAN/react-season-component-web/blob/develop/public/home_light.png?raw=true")'}; */
  background-image: ${({ isDark }) =>
    isDark
      ? `url("${process.env.PUBLIC_URL}/home_dark.png")`
      : `url("${process.env.PUBLIC_URL}/home_light.png")`};
  background-size: cover;
  width: 30px;
  height: 30px;
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const TimeButton = styled.div<{ isDark: boolean }>`
  position: relative;
  /* background-image: url(${({ isDark }) => (isDark ? 'time_dark.png' : 'time_light.png')}); */
  /* background-image: ${({ isDark }) =>
    isDark
      ? 'url("https://github.com/PPO-F-MAN/react-season-component-web/blob/develop/public/time_dark.png?raw=true")'
      : 'url("https://github.com/PPO-F-MAN/react-season-component-web/blob/develop/public/time_light.png?raw=true")'}; */
  background-image: ${({ isDark }) =>
    isDark
      ? `url("${process.env.PUBLIC_URL}/time_dark.png")`
      : `url("${process.env.PUBLIC_URL}/time_light.png")`};
  background-size: cover;
  width: 30px;
  height: 30px;
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const SeasonButton = styled.div<{ isDark: boolean }>`
  position: relative;
  /* background-image: url(${({ isDark }) => (isDark ? 'season_dark.png' : 'season_light.png')}); */
  /* background-image: ${({ isDark }) =>
    isDark
      ? 'url("https://github.com/PPO-F-MAN/react-season-component-web/blob/develop/public/season_dark.png?raw=true")'
      : 'url("https://github.com/PPO-F-MAN/react-season-component-web/blob/develop/public/season_light.png?raw=true")'}; */
  background-image: ${({ isDark }) =>
    isDark
      ? `url("${process.env.PUBLIC_URL}/season_dark.png")`
      : `url("${process.env.PUBLIC_URL}/season_light.png")`};
  background-size: cover;
  width: 30px;
  height: 30px;
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const WeatherButton = styled.div<{ isDark: boolean }>`
  position: relative;
  /* background-image: url(${({ isDark }) =>
    isDark ? 'weather_dark.png' : 'weather_light.png'}); */
  /* background-image: ${({ isDark }) =>
    isDark
      ? 'url("https://github.com/PPO-F-MAN/react-season-component-web/blob/develop/public/weather_dark.png?raw=true")'
      : 'url("https://github.com/PPO-F-MAN/react-season-component-web/blob/develop/public/weather_light.png?raw=true")'}; */
  background-image: ${({ isDark }) =>
    isDark
      ? `url("${process.env.PUBLIC_URL}/weather_dark.png")`
      : `url("${process.env.PUBLIC_URL}/weather_light.png")`};
  background-size: cover;
  width: 30px;
  height: 30px;
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const ForMargin = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

export const SlidingPointer = styled.div<{ page: 'Home' | 'Time' | 'Season' | 'Weather' }>`
  position: relative;
  /* background-image: url('sliding_pointer.png'); */
  /* background-image: url('https://github.com/PPO-F-MAN/react-season-component-web/blob/develop/public/sliding_pointer.png?raw=true'); */
  background-image: url(${process.env.PUBLIC_URL}/sliding_pointer.png);
  background-size: cover;
  width: 80px;
  height: 100px;
  margin-left: 20px;
  top: ${({ page }) => {
    switch (page) {
      case 'Home':
        return '100px';
      case 'Time':
        return '200px';
      case 'Season':
        return '300px';
      default:
        return '400px';
    }
  }};
`;

export const Nav = styled.div``;
