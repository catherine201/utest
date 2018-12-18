import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import home from '..';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) home -- snapshot', () => {
  it('capture snapshot of home', () => {
    const footer = shallow(<home />);
    expect(footer).toMatchSnapshot();
  });
});
