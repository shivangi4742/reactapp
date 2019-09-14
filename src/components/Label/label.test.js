import React from 'react';
import { shallow } from 'enzyme';
import Label from './label';
import toJson from 'enzyme-to-json';
 
describe('Labels',  () => {
    it('should render the label', () => {
        const tree = shallow(<Label status='active'/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
       it('should render the label with different label color', () => {
        const tree = shallow(<Label status='inactive'/>);
        expect(toJson(tree)).toMatchSnapshot();
    });
})