import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import login from '..';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) login -- snapshot', () => {
  it('capture snapshot of login', () => {
    const footer = shallow(<login />);
    expect(footer).toMatchSnapshot();
  });
});
