import styled from '@emotion/styled';
import { Slider } from '@mui/material';
import { TimeTypeProps } from '../../types';

export type ControllerColorType =
  | 'auto'
  | 'spring'
  | 'summer'
  | 'autumn'
  | 'winter'
  | TimeTypeProps
  | 'sunny'
  | 'cloudy'
  | 'rainy'
  | 'snowy'
  | 'home';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 580px;
  height: 780px;
  z-index: 999;
`;

export const Foreground = styled.div<{ type: ControllerColorType }>`
  position: absolute;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 30px;
  left: 0;
  width: 550px;
  background: ${({ type }) => {
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
    case 'home':
        return 'linear-gradient(180deg, #FFFFFF 0%, #FFE7F4 38.02%, #BBC0E5 100%)';
      default:
        return '#92B7D4';
    }
  }};
  height: 750px;
  border-radius: 50px 50px 0px 300px;
  z-index: 1;
  & > * {
    margin-bottom: 20px;
  }
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
      case 'home':
        return '#FFE7F5';
      default:
        return '#b9cedf';
    }
  }};
  z-index: 0;
`;

export const CustomVariableContainer = styled.div``;

export const CommonVariables = styled.div`
  color: #0f0f0f;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 40px;
`;

export const CardComponentContainer = styled.div``;

export const CardComponentHeader = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 8px;
`;

export const CardComponentTitle = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 16px;
  line-height: 16px;
  margin-top: 14px;
`;

export const AppSlider = styled(Slider)`
  width: 197px;
`;

export const InputProperty = styled.div`
  font-size: 14px;
  line-height: 16px;
  width: 40px;
`;

export const InputUnit = styled.div`
  font-size: 14px;
  line-height: 16px;
`;

export const SnowFlake = styled.div`
  background-image: url("${process.env.PUBLIC_URL}/snowflake-group.png");
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: 400px;
  margin-top: 300px;
  margin-left: 160px;
`;
