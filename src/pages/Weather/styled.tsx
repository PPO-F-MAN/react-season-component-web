import styled from '@emotion/styled';
import { Weather } from 'react-season-component';

export const Main = styled.main`
  position: relative;
  height: 100%;
  padding-left: 100px;
`;

export const Container = styled.div`
  position: relative;
  padding-left: 140px;
  padding-bottom: 50px;
  width: 80%;
`;

export const Title = styled.p`
  font-size: 64px;
`;

export const SubTitle = styled.p`
  font-size: 36px;
`;

interface CardProps {
  width: number;
  height: number;
}

export const Card = styled.div<CardProps>`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export const CodeContainer = styled.code``;

export const AppWeather = styled(Weather)<{ visible: boolean }>`
  position: absolute !important;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${({ visible }) => (visible ? 5 : 3)};
`;
