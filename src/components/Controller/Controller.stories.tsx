import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Controller from './index';

export default {
  component: Controller,
  title: 'Controller',
} as ComponentMeta<typeof Controller>;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable-next-line react/function-component-definition */
const Template: ComponentStory<typeof Controller> = args => <Controller {...args} />;

export const Auto = Template.bind({});
Auto.args = {
  type: 'auto',
  width: 500,
  height: 360,
};

export const Spring = Template.bind({});
Spring.args = {
  type: 'spring',
  width: 500,
  height: 360,
};

export const Winter = Template.bind({});
Winter.args = {
  type: 'winter',
  width: 500,
  height: 360,
};
