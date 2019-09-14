import React from 'react';
import { shallow } from 'enzyme';
import Accordian from './index';
import toJson from 'enzyme-to-json';

describe('Accordian', () => {
   
    it('is defined', () => {
        const accordian = shallow(<Accordian />);
        expect(accordian).toBeDefined();
    });
    it('matches the snapshots of Accordian component', () => {
        const tree = shallow(<Accordian />);
        expect(toJson(tree)).toMatchSnapshot();
    });
})