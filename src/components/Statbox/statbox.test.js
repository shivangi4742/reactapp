import React from 'react';
import { shallow } from 'enzyme';
import StatBox from './index';
import  toJSON from 'enzyme-to-json';

describe('StatBox', () => {
    it('matches the snapshots of StatBox component', () => {
        const tree = shallow(<StatBox />);
        expect(toJSON(tree)).toMatchSnapshot();
    });
})