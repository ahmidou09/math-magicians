/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import React from 'react';
import { render } from '@testing-library/react';
import BoxButton from '../components/Calculator/BoxButton';

test('renders BoxButton component', () => {
  const { container } = render(
    <BoxButton>
      <button type="button">Button 1</button>
      <button type="button">Button 2</button>
    </BoxButton>
  );
  expect(container).toMatchSnapshot();
});
