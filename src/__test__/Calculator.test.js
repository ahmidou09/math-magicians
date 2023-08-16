/* eslint-disable linebreak-style */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator/Calculator';

test('renders Calculator component', () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});

test('updates Screen component when buttons are clicked', () => {
  const { getByTestId, getByText } = render(<Calculator />);

  // Simulate clicking buttons
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));

  const screen = getByTestId('screen');
  expect(screen.textContent).toBe('3');
});
