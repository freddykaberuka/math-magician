import calculate from '../../logic/calculate';

test('It should return the addition of calculation', () => {
  const obj = {
    total: 6,
    next: 3,
    operation: '+',
  };
  const buttonName = '=';
  expect(calculate(obj, buttonName)).toEqual({
    next: null,
    operation: null,
    total: '9',
  });
});
test('It should return the substraction of calculation', () => {
  const obj = {
    total: 6,
    next: 3,
    operation: '-',
  };
  const buttonName = '=';
  expect(calculate(obj, buttonName)).toEqual({
    next: null,
    operation: null,
    total: '3',
  });
});
test('It should return the division of calculation', () => {
  const obj = {
    total: 6,
    next: 3,
    operation: '÷',
  };
  const buttonName = '=';
  expect(calculate(obj, buttonName)).toEqual({
    next: null,
    operation: null,
    total: '2',
  });
});
test('It should return the multiplication of calculation', () => {
  const obj = {
    total: 6,
    next: 3,
    operation: 'x',
  };
  const buttonName = '=';
  expect(calculate(obj, buttonName)).toEqual({
    next: null,
    operation: null,
    total: '18',
  });
});
test('It should return the modulas of calculation', () => {
  const obj = {
    total: 6,
    next: 3,
    operation: '%',
  };
  const buttonName = '=';
  expect(calculate(obj, buttonName)).toEqual({
    next: null,
    operation: null,
    total: '0',
  });
});
