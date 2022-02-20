import React, { useState } from 'react';
import { Controller, Sidebar } from '../../components';
import { Main } from './styled';

type WeatherType = 'sunny' | 'cloudy' | 'snowy' | 'rainy';

const weatherTypeMap: Record<WeatherType, WeatherType> = {
  cloudy: 'cloudy',
  sunny: 'sunny',
  snowy: 'snowy',
  rainy: 'rainy',
};

function WeatherPage() {
  const [type, setType] = useState<keyof typeof weatherTypeMap>(weatherTypeMap.sunny);
  const [typeChangeTerm, setTypeChangeTerm] = useState(10000);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

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

  return (
    <Main>
      <Sidebar type="cloudy" currentPage="Weather" />
      <Controller
        type="cloudy"
        width={width}
        height={height}
        onChangeWidth={handleChangeWidth}
        onChangeHeight={handleChangeHeight}
      >
        d
      </Controller>
    </Main>
  );
}

export default WeatherPage;
