import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Home from '../../pages/Home';

// Test for rendering the navigation
describe('Test for rendering the navigation', () => {
  it('It should render home page', () => {
    const home = renderer
      .create(<Router><Home /></Router>)
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
