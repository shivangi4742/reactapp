import React from 'react';
import { shallow } from 'enzyme';
import Select from './select';
import toJSON from 'enzyme-to-json';

it('matches the snapshots of Select component', () => {
    const menusitems = ["daily", "monthly", "yearly"];
  //  const tree = shallow(<Select menus={menusitems} size="s" />);
   // expect(toJSON(tree)).toMatchSnapshot();
});