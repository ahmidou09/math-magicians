import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote/Quote';

it('renders loading state initially', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment()).toMatchSnapshot();
});
