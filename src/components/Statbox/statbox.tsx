import React from 'react';

import { Statboxstyle } from './statbox.styles';

const Statbox = (props) => {
    return (
        <Statboxstyle >
            {props.children}
        </Statboxstyle>
    );
}

export default Statbox;