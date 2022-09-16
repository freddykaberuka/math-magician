import Operate from '../../logic/operate';

// Test calculation of numbers
test('It should return the addition of calculation', () => {
  const numberOne = 3; const
    numberTwo = 3;
  const operation = '+';
  expect(Operate(numberOne, numberTwo, operation)).toEqual('6');
});
test('It should return the substraction of calculation', () => {
  const numberOne = 3;
  const numberTwo = 3;
  const operation = '-';
  expect(Operate(numberOne, numberTwo, operation)).toEqual('0');
});
test('It should return the multiplication of calculation', () => {
  const numberOne = 3;
  const numberTwo = 3;
  const operation = 'x';
  expect(Operate(numberOne, numberTwo, operation)).toEqual('9');
});
test('It should return the division of calculation', () => {
  const numberOne = 3;
  const numberTwo = 3;
  const operation = '÷';
  expect(Operate(numberOne, numberTwo, operation)).toEqual('1');
});
test('It should return the modulas of calculation', () => {
  const numberOne = 3;
  const numberTwo = 3;
  const operation = '%';
  expect(Operate(numberOne, numberTwo, operation)).toEqual('0');
});
