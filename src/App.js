import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Screen from './components/Screen';
import BoxButton from './components/BoxButton';
import Button from './components/Button';
import calculate from './logic/calculate';
import Quote from './components/Quote';

const btnValues = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, '×'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const App = () => {
  const [calc, setCalc] = useState({});
  const { next, total } = calc;

  return (
    <div className="app">
      <Calculator>
        <Screen next={next} total={total} />
        <BoxButton>
          {btnValues.flat().map((btn) => (
            <Button
              value={btn.toString()} // Convert to string
              key={btn}
              onClick={() => setCalc(calculate(calc, btn.toString()))}
            />
          ))}
        </BoxButton>
      </Calculator>
      <Quote />
    </div>
  );
};
export default App;
