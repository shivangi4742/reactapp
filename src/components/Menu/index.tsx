
import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';

const Menu = (props) => {
    return (
        <div>
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
        </div>
    );
}

export default Menu;

