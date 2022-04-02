import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HashRouter } from 'react-router-dom';
import Sidebar from './index';

export default {
  component: Sidebar,
  title: 'Sidebar',
  decorators: [story => <HashRouter>{story()}</HashRouter>],
} as ComponentMeta<typeof Sidebar>;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable-next-line react/function-component-definition */
const Template: ComponentStory<typeof Sidebar> = args => <Sidebar {...args} />;

export const Home = Template.bind({});
Home.args = {
  type: 'home',
  currentPage: 'Home',
};
