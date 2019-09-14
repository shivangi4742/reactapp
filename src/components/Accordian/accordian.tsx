
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import React, { ReactNode, Children } from 'react';
import { ExpansionPanelheaderstyle } from './accordian.styles';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

type AccordianType = {
    header?: ReactNode,
    footer?: ReactNode,
    children?: ReactNode,
    disabled?: boolean,
    type?: string
}
function Accordian({ header, footer, children, ...props }: AccordianType) {
    console.log(props);
    return (
        <ExpansionPanel style={{ marginBottom: '12px' }} {...props} >
            <ExpansionPanelheaderstyle   {...props}>
                {header}
            </ExpansionPanelheaderstyle>
            <ExpansionPanelDetails>
                {children}
            </ExpansionPanelDetails>
            {footer ? (<div> <Divider />
                <ExpansionPanelActions>
                    {footer}
                </ExpansionPanelActions></div>) : null}
        </ExpansionPanel >

    );
}


export default Accordian;
