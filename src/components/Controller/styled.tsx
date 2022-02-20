import styled from '@emotion/styled';

export type ControllerColorType =
  | 'spring'
  | 'summer'
  | 'autumn'
  | 'winter'
  | 'morning'
  | 'day'
  | 'evening'
  | 'night'
  | 'sunny'
  | 'cloudy'
  | 'rainy'
  | 'snowy';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 580px;
  height: 780px;
`;

export const Foreground = styled.div<{ type: ControllerColorType }>`
  position: absolute;
  top: 30px;
  left: 0;
  width: 550px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'spring':
        return '#FFF9F3';
      case 'summer':
        return '#FDFEEA';
      case 'autumn':
        return '#FFBB59';
      case 'winter':
        return '#FFF9FD';
      case 'morning':
        return '#FFEEDA';
      case 'day':
        return '#B9D3EE';
      case 'evening':
        return '#4D70C8';
      case 'night':
        return '#7C7A7A';
      case 'sunny':
        return '#D5F8F9';
      case 'cloudy':
        return '#FBE6F8';
      case 'rainy':
        return '#83BDD1';
      default:
        return '#92B7D4';
    }
  }};
  height: 750px;
  border-radius: 50px 50px 0px 300px;
  z-index: 1;
`;

export const Background = styled.div<{ type: ControllerColorType }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 575px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'spring':
        return '#FFF3E7';
      case 'summer':
        return '#DAF2EA';
      case 'autumn':
        return '#ffdba8';
      case 'winter':
        return '#FFE7F5';
      case 'morning':
        return '#FFC785';
      case 'day':
        return '#a7d0fc';
      case 'evening':
        return '#94a9db';
      case 'night':
        return '#b9b9b9';
      case 'sunny':
        return '#bbfdff';
      case 'cloudy':
        return '#ffd3f8';
      case 'rainy':
        return '#a9cdda';
      default:
        return '#b9cedf';
    }
  }};
  z-index: 0;
`;
