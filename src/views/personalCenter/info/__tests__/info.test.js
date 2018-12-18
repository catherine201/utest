import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppSider from '..';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) AppSider -- snapshot', () => {
  it('capture snapshot of AppSider', () => {
    const footer = shallow(<AppSider />);
    expect(footer).toMatchSnapshot();
  });
});
