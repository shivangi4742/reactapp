import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './tooltip';
import toJSON from 'enzyme-to-json';
describe('ToolTip', () => {

 it('should have 1 ToolTip element ', () => {
        const wrapper = shallow(<Tooltip size='sm'>+</Tooltip>);
          console.log(wrapper.debug());
    });
     it('should have 1 ToolTip element ', () => {
        const wrapper = shallow(<Tooltip size='lg'>+</Tooltip>);
          console.log(wrapper.debug());
    });
    it('renders without crashing', () => {
  const tree = shallow(<Tooltip />);
    expect(toJSON(tree)).toMatchSnapshot();
});
});