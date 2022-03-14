import React from 'react';
import renderer from 'react-test-renderer';
import Controller from '../index';
import { TypeChecker } from '../../Season/TypeChecker';

describe('Controller component test', () => {
  let ControllerComponent;
  let type;
  let typehandler;

  beforeAll(() => {
    type = 'spring';
    typehandler = jest.fn();
    ControllerComponent = (
      <Controller
        type={type}
        width={500}
        height={360}
        onChangeWidth={jest.fn()}
        onChangeHeight={jest.fn()}
      >
        <TypeChecker handleType={typehandler} />
      </Controller>
    );
  });

  it('Render Controller', () => {
    const component = renderer.create(ControllerComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
