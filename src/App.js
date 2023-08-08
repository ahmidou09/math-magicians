import Calculator from './components/Calculator';
import Screen from './components/Screen';
import BoxButton from './components/BoxButton';
import Button from './components/Button';

const btnValues = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, '×'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const App = () => (
  <Calculator>
    <Screen />
    <BoxButton>
      {btnValues.flat().map((btn) => (
        <Button value={btn} key={btn} />
      ))}
    </BoxButton>
  </Calculator>
);

export default App;
