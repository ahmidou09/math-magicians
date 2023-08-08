import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ next, total }) => (
  <div className="screen">{next || total || '0'}</div>
);

Screen.propTypes = {
  next: PropTypes.string,
  total: PropTypes.string,
};

Screen.defaultProps = {
  next: '',
  total: '',
};

export default Screen;
