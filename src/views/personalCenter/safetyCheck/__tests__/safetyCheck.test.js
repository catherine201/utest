import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import safetyCheck from '..';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) safetyCheck -- snapshot', () => {
  it('capture snapshot of safetyCheck', () => {
    const footer = shallow(<safetyCheck />);
    expect(footer).toMatchSnapshot();
  });
});
