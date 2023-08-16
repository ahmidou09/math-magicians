/* eslint-disable linebreak-style */
import calculate from '../logic/calculate';

describe('calculate function', () => {
  it('clears the calculator (AC)', () => {
    const initialState = { total: '10', next: '5', operation: '+' };
    const newState = calculate(initialState, 'AC');
    expect(newState).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('creates a new next when there is an operation', () => {
    const initialState = { total: '10', next: '5', operation: '+' };
    const newState = calculate(initialState, '2');
    expect(newState).toEqual({
      total: '10',
      next: '52',
      operation: '+',
    });
  });

  it('handles decimal point correctly', () => {
    const initialState = { total: '10', next: '5', operation: null };
    const newState = calculate(initialState, '.');
    expect(newState).toEqual({
      total: '10',
      next: '5.',
      operation: null,
    });
  });

  it('handles +/- operation on next', () => {
    const initialState = { total: null, next: '5', operation: null };
    const newState = calculate(initialState, '+/-');
    expect(newState).toEqual({
      total: null,
      next: '-5',
      operation: null,
    });
  });

  it('performs addition correctly', () => {
    const initialState = { total: '10', next: '5', operation: '+' };
    const newState = calculate(initialState, '=');
    expect(newState).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });
});
