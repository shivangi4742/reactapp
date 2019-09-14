import React from 'react';
import { shallow } from 'enzyme';
import Tab from './tab';
import toJSON from 'enzyme-to-json';

const tabIndex = 0;
const tabs= ['daily', 'weekly', 'monthly'];

describe('Tab', () => {
    it('renders without crashing', () => {
   // const tree = shallow( <Tab activeTab={tabIndex} handler={1} tabs={tabs} />);
   // expect(toJSON(tree)).toMatchSnapshot();
});
});