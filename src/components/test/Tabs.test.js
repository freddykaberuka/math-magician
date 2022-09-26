import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Tabs from '../Tabs';

describe('Test for rendering the navigation', () => {
  it('It should render the navigation header bar', () => {
    const tabs = renderer
      .create(<Router><Tabs /></Router>)
      .toJSON();
    expect(tabs).toMatchSnapshot();
  });
});
