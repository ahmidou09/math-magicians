import operate from '../logic/operate';

describe('operate function', () => {
  it('adds two numbers', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('subtracts two numbers', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  it('multiplies two numbers', () => {
    expect(operate('4', '6', '×')).toBe('24');
  });

  it('divides two numbers', () => {
    expect(operate('10', '2', '÷')).toBe('5');
  });

  it('returns an error message when dividing by 0', () => {
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('calculates modulo of two numbers', () => {
    expect(operate('10', '3', '%')).toBe('1');
  });

  it('returns an error message when finding modulo with 0 divisor', () => {
    expect(operate('10', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });

  it('throws an error for an unknown operation', () => {
    expect(() => operate('2', '3', '#')).toThrow("Unknown operation '#'");
  });
});
