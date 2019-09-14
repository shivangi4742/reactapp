
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Align } from './card.styles';

const CardHeader = (props) => {
    const p = props.left ? (props.left) : ('');
    return (
        <div>
            <Grid container >
                <Grid item sm={props.right && props.center ? (4) : props.right ? (6) : (12)}>
                    <Align fontWeight="bold" fontSize="16px">{p}</Align>
                </Grid>
                {props.center ? (
                    <Grid item sm={4}>
                        {props.center}
                    </Grid>) : ('')
                }
                {props.right ? (<Grid item sm={props.center && props.right ? (4) : (6)}>
                    <Align align="right">
                        {props.right}
                    </Align>
                </Grid>) : ('')
                }
            </Grid>
        </div>

    );
}

export default CardHeader;