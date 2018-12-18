import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import register from '..';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) register -- snapshot', () => {
  it('capture snapshot of register', () => {
    const footer = shallow(<register />);
    expect(footer).toMatchSnapshot();
  });
});
