import styled from '@emotion/styled';

export type ControllerColorType = 'weather' | 'time' | 'season';

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
      case 'weather':
        return '#FFF9FD';
      case 'time':
        return '#FFEEDA';
      default:
        return '#FFF9F3';
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
      case 'weather':
        return '#FFE7F5';
      case 'time':
        return '#FFC785';
      default:
        return '#FFF3E7';
    }
  }};
  z-index: 0;
`;
