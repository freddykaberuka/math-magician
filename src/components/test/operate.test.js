import Operate from '../../logic/operate';

// Test calculation of numbers
test('It should return calculaions', () => {
  const numberOne = 3; const
    numberTwo = 3;
  const operation = '+';
  expect(Operate(numberOne, numberTwo, operation)).toEqual('6');
});
