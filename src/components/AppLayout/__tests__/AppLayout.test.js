import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppLayout from '..';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) AppLayout -- snapshot', () => {
  it('capture snapshot of AppLayout', () => {
    const footer = shallow(<AppLayout />);
    expect(footer).toMatchSnapshot();
  });
});
