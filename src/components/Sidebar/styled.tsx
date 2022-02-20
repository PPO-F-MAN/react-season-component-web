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
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
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
