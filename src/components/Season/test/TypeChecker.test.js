import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { TypeChecker } from '../../../components/Season/TypeChecker';

describe('TypeChecker', () => {
  let handleType;
  let TypeCheckerComponent;

  beforeAll(() => {
    handleType = jest.fn();
    TypeCheckerComponent = <TypeChecker handleType={handleType} />;
  });

  it('Render TypeChecker', () => {
    const component = renderer.create(TypeCheckerComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("Calls typeHandler when clicking the 'type' radio button", () => {
    render(TypeCheckerComponent);

    const handleType = jest.fn();
    render(<TypeChecker handleType={handleType} />);

    const button = screen.getAllByText('spring')[1];
    userEvent.click(button);

    expect(handleType).toHaveBeenCalledTimes(1);
  });
});
