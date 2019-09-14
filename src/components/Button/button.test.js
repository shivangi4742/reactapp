import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';
import toJson from 'enzyme-to-json';
import DS from '../../utils/design-system';
const mockFn = jest.fn();

describe('Button', () => {
   
    it('is defined', () => {
        const button = shallow(<Button />);
        expect(button).toBeDefined();
    });
    it('matches the snapshots of Button component', () => {
        const tree = shallow(<Button />);
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('render the primary button', () => {
        const button = shallow(<Button />);
        expect(button).toMatchSnapshot();
    });
    it('render the secondary button', () => {
        const button = shallow(<Button />);
        expect(button.html().match(/style="([^"]*)"/i)[1]).toBe(`color: ${DS.THEME.SECONDARY.main};`);
    });
    it('simulate click', () => {
        const button = shallow(<Button />);
        button.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
})