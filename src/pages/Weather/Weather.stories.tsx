import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WeatherPage from './index';

export default {
  component: WeatherPage,
  title: 'WeatherPage',
  decorators: [story => <HashRouter>{story()}</HashRouter>],
} as ComponentMeta<typeof WeatherPage>;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable-next-line react/function-component-definition */
const Template: ComponentStory<typeof WeatherPage> = () => <WeatherPage />;

export const Default = Template.bind({});
