import { sum } from '../code-to-unit-test/sum';

test('basic add works', () => {
  expect(1 + 2).toBe(5);
});

test('sum func works normal', () => {
  expect(sum(1, 2)).toBe(3);
});