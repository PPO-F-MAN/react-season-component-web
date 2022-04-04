import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { TypeChecker } from './index';
import Controller from '../Controller';
import { ControllerColorType } from '../Controller/styled';

export default {
  component: TypeChecker,
  title: 'TypeChecker',
  argTypes: {
    handleType: { action: 'clicked' },
  },
  decorators: [withKnobs],
} as ComponentMeta<typeof TypeChecker>;

export function TypeCheckerComponent(): JSX.Element {
  const [type, setType] = useState<ControllerColorType>('click type', 'auto');
  const [width, setWidth] = useState<number>('changes width', 500);
  const [height, setHeight] = useState<number>('changes height', 360);

  const handleWidth = (e: any) => {
    setWidth(e.target.value);
  };

  const handleHeight = (e: any) => {
    setHeight(e.target.value);
  };

  return (
    <Controller
      type={type}
      width={width}
      height={height}
      onChangeWidth={handleWidth}
      onChangeHeight={handleHeight}
    >
      <TypeChecker handleType={e => setType(e.target.value)} />
    </Controller>
  );
}

TypeCheckerComponent.story = {
  name: 'Default',
};
