import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppHeader from '../index';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) AppHeader -- snapshot', () => {
  it('capture snapshot of AppHeader', () => {
    const footer = shallow(<AppHeader />);
    expect(footer).toMatchSnapshot();
  });
});
