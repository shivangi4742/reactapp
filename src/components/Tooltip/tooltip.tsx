import React from 'react';
import Fab from '@material-ui/core/Fab';
import { ToolProps } from './tooltip.typings';
import Tooltipstyle from './styles';

const Tooltips = ({ children, ...props }: ToolProps) => {

    return (
        <Tooltipstyle title="Add" {...props}  >
            <Fab color="primary" >
                {children}
            </Fab>
        </Tooltipstyle>
    ); 4

}


export default Tooltips;