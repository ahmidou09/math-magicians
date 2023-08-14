import PropTypes from 'prop-types';

const BoxButton = ({ children }) => (
  <div className="buttonBox">
    {children}
  </div>
);
BoxButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxButton;
