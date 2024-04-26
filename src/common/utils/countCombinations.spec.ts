import { countCombinations } from './countCombinations';

describe('Calculate combinations', () => {
  it('should calculate possible combinations count', () => {
    const chars = 'abc';
    const length = 3;

    const n = chars.length;

    const count = countCombinations(n, length);

    expect(count).toEqual(27);
  });
});
