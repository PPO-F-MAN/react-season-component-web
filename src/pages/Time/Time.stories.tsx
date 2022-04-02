import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TimePage from './index';

export default {
  component: TimePage,
  title: 'TimePage',
  decorators: [story => <HashRouter>{story()}</HashRouter>],
} as ComponentMeta<typeof TimePage>;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable-next-line react/function-component-definition */
const Template: ComponentStory<typeof TimePage> = () => <TimePage />;

export const Default = Template.bind({});
