import React, { useState } from 'react';
import Screen from './Screen';
import BoxButton from './BoxButton';
import Button from './Button';
import calculate from '../../logic/calculate';

const btnValues = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, '×'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const Calculator = () => {
  const [calc, setCalc] = useState({});
  const { next, total } = calc;

  return (
    <div className="calc-container">
      <h2>Lets do some math!</h2>
      <div className="calc">
        <Screen next={next} total={total} />
        <BoxButton>
          {btnValues.flat().map((btn) => (
            <Button
              value={btn.toString()}
              key={btn}
              onClick={() => setCalc(calculate(calc, btn.toString()))}
            />
          ))}
        </BoxButton>
      </div>
    </div>
  );
};

export default Calculator;
