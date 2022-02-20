import React from 'react';
import { Time } from 'react-season-component';
import * as Styled from './styled';
import Controller from '../../components/Controller';

function TimePage() {
  return (
    <>
      <Controller type="time">dd</Controller>
      <Styled.Container>
        <Styled.Title>Time</Styled.Title>
        <Styled.SubTitle>Preview</Styled.SubTitle>
        <Styled.Card>
          <Time type="night" animationRoundTime={1} animation="top-to-bottom" background />
        </Styled.Card>
        <Styled.SubTitle>Example Code</Styled.SubTitle>
        <Styled.CodeContainer>react code</Styled.CodeContainer>
      </Styled.Container>
    </>
  );
}

export default TimePage;
