/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';
import Screen from '../components/Calculator/Screen';

test('renders Screen component with next value', () => {
  const { container } = render(<Screen next="42" />);
  expect(container).toMatchSnapshot();
});

test('renders Screen component with total value', () => {
  const { container } = render(<Screen total="123" />);
  expect(container).toMatchSnapshot();
});

test('renders Screen component with default value', () => {
  const { container } = render(<Screen />);
  expect(container).toMatchSnapshot();
});
