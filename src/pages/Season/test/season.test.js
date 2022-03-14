import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SeasonPage from '../index';

describe('Season Page', () => {
  let SeasonPageComponent;

  beforeAll(() => {
    SeasonPageComponent = (
      <BrowserRouter>
        <SeasonPage />
      </BrowserRouter>
    );
  });

  it('Check season page title', () => {
    render(SeasonPageComponent);

    expect(screen.getByText('Season')).toBeInTheDocument();
  });

  it('Check default "width" when mounted season page', () => {
    render(SeasonPageComponent);

    const width = screen.getAllByText('500')[0];

    expect(width).toBeInTheDocument();
  });

  it('Check default "type" when mounted season page', () => {
    render(SeasonPageComponent);

    const type = screen.getAllByText('auto')[0];

    expect(type).toBeInTheDocument();
  });
});
