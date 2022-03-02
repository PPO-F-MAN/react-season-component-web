import { useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ControllerToggleButton from './ControllerToggleButton';
import {
  Container,
  Foreground,
  Background,
  ControllerColorType,
  CommonVariables,
  CustomVariableContainer,
  CardComponentContainer,
  CardComponentHeader,
  AppSlider,
  InputContainer,
  InputProperty,
  InputUnit,
  SnowFlake,
} from './styled';

export interface ControllerProps {
  type: ControllerColorType;
  children?: React.ReactNode;
  // 현재 너비
  width?: number;
  // 현재 높이
  height?: number;
  // 너비 변경 핸들러
  onChangeWidth?: (event: Event, value: number | number[]) => void;
  // 높이 변경 핸들러
  onChangeHeight?: (event: Event, value: number | number[]) => void;
}

function Controller({
  children = null,
  type,
  width = 200,
  height = 200,
  onChangeWidth,
  onChangeHeight,
}: ControllerProps) {
  const [visibility, setVisibility] = useState(false);
  const isWide = useMediaQuery('(max-width: 1400px)');

  return (
    <Container>
      {isWide && <ControllerToggleButton visibility={visibility} setVisibility={setVisibility} />}
      {(visibility || !isWide) && (
        <Foreground type={type}>
          {type === 'home' ? (
            <SnowFlake />
          ) : (
            <>
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
            </>
          )}
        </Foreground>
      )}
      {(visibility || !isWide) && <Background type={type} />}
    </Container>
  );
}

export default Controller;
