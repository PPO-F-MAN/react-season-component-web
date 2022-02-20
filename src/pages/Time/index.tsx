import React from 'react';
import * as Styled from './styled';
import Controller from '../../components/Controller';

function Time() {
  return (
    <>
      <Controller>dd</Controller>
      <Styled.Container>
        <Styled.Title>Time</Styled.Title>
        <Styled.SubTitle>Preview</Styled.SubTitle>
        <Styled.Card />
        <Styled.SubTitle>Example Code</Styled.SubTitle>
        <Styled.CodeContainer />
      </Styled.Container>
    </>
  );
}

export default Time;
