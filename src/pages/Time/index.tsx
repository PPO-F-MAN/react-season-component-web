import React, { useState } from 'react';
import { Time } from 'react-season-component';
import { CodeBlock, dracula } from 'react-code-blocks';

import Controller from '../../components/Controller';
import * as Styled from './styled';
import {
  BackgroundChecker,
  MovingChecker,
  PositionChecker,
  TypeChecker,
} from '../../components/Time';
import { AnimationProps, ImagePositionProps, TimeTypeProps } from '../../types';
import { Sidebar } from '../../components';

function TimePage() {
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(360);

  const [type, setType] = useState<TimeTypeProps>('auto');
  const [animation, setAnimation] = useState<AnimationProps>('left-to-right');
  const [imagePosition, setImagePosition] = useState<ImagePositionProps>('left-top');
  const [background, setBackground] = useState<boolean>(true);

  const handlePosition = (e: any) => {
    setImagePosition(e.target.value);
  };

  const handleAnimation = (e: any) => {
    setAnimation(e.target.value);
  };

  const handleType = (e: any) => {
    setType(e.target.value);
  };

  const handleBackground = (e: any) => {
    setBackground(e.target.value === 'true');
  };

  const handleWidth = (e: any) => {
    setWidth(e.target.value);
  };

  const handleHeight = (e: any) => {
    setHeight(e.target.value);
  };
  const CODE = `import { Time } from 'react-season-component';
import styled from 'styled-components';

const Card = styled.div\`
  width: ${width}px;
  height: ${height}px;
\`

const MyComponent = () => {
  return (
     <Card>
       <Time
         type="night"
         animation="top-to-bottom"
         animationRoundTime={5}
         background
       />
     </Card>
  );
}
`;

  return (
    <>
      <Sidebar type={type} />
      <Controller
        type={type}
        width={width}
        height={height}
        onChangeWidth={handleWidth}
        onChangeHeight={handleHeight}
      >
        <TypeChecker handleType={handleType} />
        <PositionChecker handlePosition={handlePosition} />
        <MovingChecker handleAnimation={handleAnimation} />
        <BackgroundChecker handleBackground={handleBackground} />
      </Controller>

      <Styled.Container>
        <Styled.Title>Time</Styled.Title>
        <Styled.SubTitle>Preview</Styled.SubTitle>
        <Styled.Card width={width} height={height}>
          <Time
            type={type}
            imagePosition={imagePosition}
            animation={animation}
            animationRoundTime={5}
            background={background}
          />
        </Styled.Card>
        <Styled.SubTitle>Example Code</Styled.SubTitle>
        <Styled.CodeContainer>
          <CodeBlock theme={dracula} text={CODE} language="jsx" />
        </Styled.CodeContainer>
      </Styled.Container>
    </>
  );
}

export default TimePage;
