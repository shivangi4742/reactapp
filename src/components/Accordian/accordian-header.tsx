import React from 'react';
import { Right, Left } from './accordian.styles';
import Grid from '@material-ui/core/Grid';

const Accordianheader = (props) => {
    return (
        <Grid container >
            <Grid item sm={props.right ? (6) : (12)} xs={6}>
                <Left>{props.left} {' '}{props.title}</Left>
            </Grid>
            <Grid item sm={6} xs={6}>
                <Right>{props.right}</Right>
            </Grid>
        </Grid>
    )
}

export default Accordianheader;