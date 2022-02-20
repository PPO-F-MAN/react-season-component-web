/* eslint-disable react/jsx-props-no-spreading */
import Radio from '@mui/material/Radio';
import React, { useState } from 'react';
import { Weather } from 'react-season-component';
import { CodeBlock, dracula } from 'react-code-blocks';
import { Controller, Sidebar } from '../../components';
import { Main, Container, Title, SubTitle, Card, CodeContainer, AppWeather } from './styled';

type WeatherType = 'sunny' | 'cloudy' | 'snowy' | 'rainy';

const weatherTypeMap: Record<WeatherType, WeatherType> = {
  cloudy: 'cloudy',
  sunny: 'sunny',
  snowy: 'snowy',
  rainy: 'rainy',
};

interface RadioButtonGroupsProps {
  selectedValue: WeatherType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioButtonGroups({ selectedValue, onChange }: RadioButtonGroupsProps) {
  const controlProps = (item: WeatherType) => ({
    checked: selectedValue === item,
    onChange,
    value: item,
    name: 'color-radio-button-weather',
    inputProps: { 'aria-label': item },
  });

  return (
    <div style={{ marginBottom: '20px' }}>
      <Radio
        {...controlProps(weatherTypeMap.sunny)}
        sx={{
          color: '#D5F8F9',
          '&.Mui-checked': {
            color: '#D5F8F9',
          },
        }}
      />{' '}
      sunny
      <Radio
        {...controlProps(weatherTypeMap.cloudy)}
        sx={{
          color: '#FBE6F8',
        }}
      />{' '}
      cloudy
      <Radio
        {...controlProps(weatherTypeMap.rainy)}
        sx={{
          color: '#83BDD1',
        }}
      />{' '}
      rainy
      <Radio
        {...controlProps(weatherTypeMap.snowy)}
        sx={{
          color: '#92B7D4',
        }}
      />{' '}
      snowy
    </div>
  );
}

function WeatherPage() {
  const [type, setType] = useState<keyof typeof weatherTypeMap>(weatherTypeMap.sunny);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  const handleChangeWidth = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setWidth(newValue);
    }
  };

  const handleChangeHeight = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setHeight(newValue);
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value as WeatherType);
  };

  const CODE = `import { Weather } from 'react-season-component';
import styled from 'styled-components';

const Card = styled.div\`
  width: ${width}px;
  height: ${height}px;
\`

const MyComponent = () => {
  return (
     <Card>
       <Weather
         type={'${type}'}
       />
     </Card>
  );
}
`;

  return (
    <Main>
      <Sidebar type={type} />
      <Controller
        type={type}
        width={width}
        height={height}
        onChangeWidth={handleChangeWidth}
        onChangeHeight={handleChangeHeight}
      >
        <RadioButtonGroups onChange={handleSelect} selectedValue={type} />
      </Controller>

      <Container>
        <Title>Weather</Title>
        <SubTitle>Preview</SubTitle>
        <Card width={width} height={height}>
          {type === 'sunny' && <Weather type="sunny" />}
          {type === 'snowy' && <Weather type="snowy" />}
          {type === 'rainy' && <Weather type="rainy" />}
          {type === 'cloudy' && <Weather type="cloudy" />}
        </Card>
        <SubTitle>Example Code</SubTitle>
        <CodeContainer>
          <CodeBlock theme={dracula} text={CODE} language="jsx" />
        </CodeContainer>
      </Container>
    </Main>
  );
}

export default WeatherPage;
