import React from 'react';
// import renderer from 'react-test-renderer';  // 这个不支持antdesign
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import game from '..';

Enzyme.configure({ adapter: new Adapter() });
describe('(Component) game -- snapshot', () => {
  it('capture snapshot of game', () => {
    const footer = shallow(<game />);
    expect(footer).toMatchSnapshot();
  });
});
