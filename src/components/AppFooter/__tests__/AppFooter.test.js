import React from 'react';
import renderer from 'react-test-renderer';
// import Enzyme from 'enzyme';
import AppFooter from '../index';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });
describe('(Component) AppFooter -- snapshot', () => {
  it('capture snapshot of AppFooter', () => {
    const footer = renderer.create(<AppFooter />).toJSON();

    console.log(footer);
    expect(footer).toMatchSnapshot();
  });
});
