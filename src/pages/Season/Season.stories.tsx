import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SeasonPage from './index';

export default {
  component: SeasonPage,
  title: 'SeasonPage',
  decorators: [story => <HashRouter>{story()}</HashRouter>],
} as ComponentMeta<typeof SeasonPage>;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable-next-line react/function-component-definition */
const Template: ComponentStory<typeof SeasonPage> = () => <SeasonPage />;

export const Default = Template.bind({});
