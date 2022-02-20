import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SeasonViewWrapper = styled.section`
  width: 900px;
  height: 600px;
`;

export const CodeContainer = styled.code`
  width: 900px;
  height: 600px;
`;

export const ButtonWrapper = styled.div`
  display: block;
  position: absolute;
  z-index: 9999;
  color: black;
  & > div {
    color: black;
  }
`;
