import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Calculator from './components/Calculator';

describe('App', () => {
  test('renders App Component', () => {
    render(<App />);
  });
});

describe('Test for App component', () => {
  it('It should render calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
