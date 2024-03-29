import styled from '@emotion/styled';

interface CardProps {
  width: number;
  height: number;
}

export const Container = styled.div`
  position: relative;
  padding-left: 140px;
  padding-bottom: 50px;
  width: 80%;
`;

export const Title = styled.p`
  font-size: 64px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 26px;
  color: #8a8a8a;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Card = styled.div<CardProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export const CodeContainer = styled.code`
  display: block;
  width: 60%;
`;
