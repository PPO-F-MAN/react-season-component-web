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
import {
  AppSlider,
  InputContainer,
  InputProperty,
  InputUnit,
} from '../../components/Controller/styled';

function TimePage() {
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(360);

  const [type, setType] = useState<TimeTypeProps>('auto');
  const [animation, setAnimation] = useState<AnimationProps>('left-to-right');
  const [imagePosition, setImagePosition] = useState<ImagePositionProps>('left-top');
  const [background, setBackground] = useState<boolean>(true);
  const [duration, setDuration] = useState<number>(10);

  const handlePosition = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value as ImagePositionProps;
    setImagePosition(value);
  };

  const handleAnimation = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value as AnimationProps;
    setAnimation(value);
  };

  const handleType = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value as TimeTypeProps;
    setType(value);
  };

  const handleBackground = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value as string;
    setBackground(value === 'true');
  };

  const handleWidth = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value as string;
    setWidth(+value);
  };

  const handleHeight = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value as string;
    setHeight(+value);
  };

  const handleDuration = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value as string;
    setDuration(+value);
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
         type="${type}"
         animation="${animation}"
         animationRoundTime={${duration}}
         background={${background}}
       />
     </Card>
  );
}
`;

  return (
    <>
      <Sidebar type={type} currentPage="Time" />
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
        <InputContainer>
          <InputProperty>Animation Round Time</InputProperty>
          <AppSlider
            size="small"
            defaultValue={duration}
            aria-label="Small"
            valueLabelDisplay="auto"
            min={2}
            max={20}
            onChange={handleDuration}
          />
          <InputUnit>{duration}s</InputUnit>
        </InputContainer>
      </Controller>

      <Styled.Container>
        <Styled.Title>Time</Styled.Title>
        <Styled.SubTitle>Preview</Styled.SubTitle>
        <Styled.Card width={width} height={height}>
          <Time
            type={type}
            imagePosition={imagePosition}
            animation={animation}
            animationRoundTime={duration}
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
