import React from 'react';
// import { shallow } from 'enzyme';
import CallsHistory from './calls-history';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('component', () => {
    it('on Button click text changes', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<CallsHistory header='jhad'> Sample text</CallsHistory>);
        const result = renderer.getRenderOutput();
        const button = result.find('.toggleBtn');
        expect(result.find('.buttonText').text()).toBe('No');
        button.simulate('click');
        expect(result.find('.buttonText').text()).toBe('Yes');

        // const wrapper = shallow(<CallsHistory header='jhad'> Sample text</CallsHistory>);
        // const button = wrapper.find('.toggleBtn');
        // expect(wrapper.find('.buttonText').text()).toBe('No');
        // button.simulate('click');
        // expect(wrapper.find('.buttonText').text()).toBe('Yes');
    });
    // it('on input chnage simulation', () => {
    //     const wrapper = shallow(<CallsHistory header='jhad'> Sample text</CallsHistory>);
    //     const input = wrapper.find('.inputBox');
    //     expect(wrapper.find('.inputText').text()).toBe('');
    //     input.simulate('change', { currentTarget: { value : 'Kushal' }});
    //     expect(wrapper.find('.inputText').text()).toBe('Kushal');
    // })
})