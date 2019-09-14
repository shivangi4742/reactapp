import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { mount, shallow } from 'enzyme';

import { StoreContext } from 'redux-react-hook';

import store from './configure-store';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
    // const div = document.createElement('div');
    // const ComponentContainer = <StoreContext.Provider value={store()}><App /></StoreContext.Provider>
    // const wrapper = mount(ComponentContainer, { attachTo: div });
    // expect(toJson(wrapper)).toMatchSnapshot();
    // wrapper.unmount();
});

