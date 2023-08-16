/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home/Home';

test('renders Home component', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
