import React from 'react';
import {
  Container,
  Foreground,
  Background,
  ControllerColorType,
  ControllerContentWrapper,
  CommonVariables,
  CustomVariableContainer,
  CardComponentContainer,
  CardComponentHeader,
  AppSlider,
  InputContainer,
  InputProperty,
  InputUnit,
} from './styled';

export interface ControllerProps {
  children: React.ReactNode;
  type: ControllerColorType;
  // 현재 너비
  width: number;
  // 현재 높이
  height: number;
  // 너비 변경 핸들러
  onChangeWidth: (event: Event, value: number | number[]) => void;
  // 높이 변경 핸들러
  onChangeHeight: (event: Event, value: number | number[]) => void;
}

function Controller({
  children = null,
  type,
  width = 200,
  height = 200,
  onChangeWidth,
  onChangeHeight,
}: ControllerProps) {
  return (
    <Container>
      <Foreground type={type} />
      <Background type={type} />
      <ControllerContentWrapper>
        <CustomVariableContainer>
          <CommonVariables>Custom Variables</CommonVariables>
          {children}
        </CustomVariableContainer>
        <CardComponentContainer>
          <CardComponentHeader>Card Component</CardComponentHeader>
          <InputContainer>
            <InputProperty>Width</InputProperty>
            <AppSlider
              size="small"
              defaultValue={width}
              aria-label="Small"
              valueLabelDisplay="auto"
              min={200}
              max={900}
              onChange={onChangeWidth}
            />
            <InputUnit>{width} px</InputUnit>
          </InputContainer>
          <InputContainer>
            <InputProperty>Height</InputProperty>
            <AppSlider
              size="small"
              defaultValue={height}
              aria-label="Small"
              valueLabelDisplay="auto"
              min={200}
              max={600}
              onChange={onChangeHeight}
            />
            <InputUnit>{height} px</InputUnit>
          </InputContainer>
        </CardComponentContainer>
      </ControllerContentWrapper>
    </Container>
  );
}

export default Controller;
