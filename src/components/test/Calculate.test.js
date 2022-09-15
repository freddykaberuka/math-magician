import calculate from '../../logic/calculate';

test('It should return calculaions', () => {
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
