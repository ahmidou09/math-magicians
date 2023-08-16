/* eslint-disable linebreak-style */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Calculator/Button';

test('renders Button component with value', () => {
  const { container } = render(<Button value="7" onClick={() => {}} />);
  expect(container).toMatchSnapshot();
});

test('fires onClick event when Button is clicked', () => {
  const mockOnClick = jest.fn();
  const { getByText } = render(<Button value="+" onClick={mockOnClick} />);
  fireEvent.click(getByText('+'));
  expect(mockOnClick).toHaveBeenCalled();
});
