import React from 'react';
import renderer from 'react-test-renderer';
import AppFooter from '../index';

// Enzyme.configure({ adapter: new Adapter() });
describe('(Component) AppHeader -- snapshot', () => {
  it('capture snapshot of AppHeader', () => {
    const footer = renderer.create(<AppFooter />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
