import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { renderHook, act } from '@testing-library/react-hooks';

import Controller from '../index';
import useMediaQuery from '../hooks/useMediaQuery';

describe('Controller component test', () => {
  let ControllerComponent;
  let type;

  beforeAll(() => {
    type = 'spring';
    ControllerComponent = (
      <Controller
        type={type}
        width={500}
        height={360}
        onChangeWidth={jest.fn()}
        onChangeHeight={jest.fn()}
      />
    );
  });

  it('Render Controller', () => {
    const component = renderer.create(ControllerComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  //   it('test controller', () => {
  //     const { result } = renderHook(() => useMediaQuery('(max-width: 1300px)'));

  //     expect(result.current).toBe(true);
  //   });
});
