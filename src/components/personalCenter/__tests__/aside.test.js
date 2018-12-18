import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import aside from '../aside';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) aside -- snapshot', () => {
  it('capture snapshot of aside', () => {
    const footer = shallow(<aside />);
    expect(footer).toMatchSnapshot();
  });
});
