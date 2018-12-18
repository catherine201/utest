import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import notFind from '..';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) notFind -- snapshot', () => {
  it('capture snapshot of notFind', () => {
    const footer = shallow(<notFind />);
    expect(footer).toMatchSnapshot();
  });
});
