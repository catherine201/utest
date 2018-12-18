import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import demo from '..';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) demo -- snapshot', () => {
  it('capture snapshot of demo', () => {
    const footer = shallow(<demo />);
    expect(footer).toMatchSnapshot();
  });
});
