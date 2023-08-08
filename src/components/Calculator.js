import PropTypes from 'prop-types';

const Calculator = ({ children }) => (
  <div className="calc-container">
    {children}
  </div>
);

Calculator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Calculator;
