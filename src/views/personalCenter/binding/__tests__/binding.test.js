import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import binding from '..';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) binding -- snapshot', () => {
  it('capture snapshot of binding', () => {
    const footer = shallow(<binding />);
    expect(footer).toMatchSnapshot();
  });
});
