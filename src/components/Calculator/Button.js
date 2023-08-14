import React from 'react';
import PropTypes from 'prop-types';

const getStyleName = (btn) => {
  const className = {
    '=': 'opt',
    '×': 'opt',
    '-': 'opt',
    '+': 'opt',
    '÷': 'opt',
    0: 'zero',
  };
  return className[btn];
};

const Button = ({ value, onClick }) => (
  <button type="button" className={`${getStyleName(value)} button`} onClick={onClick}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
