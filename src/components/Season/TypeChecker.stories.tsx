import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within, waitFor } from '@storybook/testing-library';
import { TypeChecker } from './index';
import Controller from '../Controller';
import * as ControllerStories from '../Controller/Controller.stories';

const types = {
  auto: ControllerStories.Auto.args?.type,
  spring: ControllerStories.Spring.args?.type,
  winter: ControllerStories.Winter.args?.type,
};

export default {
  component: TypeChecker,
  title: 'TypeChecker',
  argTypes: {
    handleType: { action: 'clicked' },
  },
  decorators: [story => <Controller>{story()}</Controller>],
} as ComponentMeta<typeof TypeChecker>;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable-next-line react/function-component-definition */
const Template: ComponentStory<typeof TypeChecker> = args => <TypeChecker {...args} />;

export const Auto = Template.bind({});

export const Spring = Template.bind({});
Spring.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    userEvent.click(canvas.getByText('spring'));
  });
};
Spring.decorators = [story => <Controller type={types.spring}>{story()}</Controller>];

export const Winter = Template.bind({});
Winter.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    userEvent.click(canvas.getByText('winter'));
  });
};
Winter.decorators = [story => <Controller type={types.winter}>{story()}</Controller>];
