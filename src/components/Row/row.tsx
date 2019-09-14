
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { RowsProps } from './row.typings';

const Rows = ({ children, ...props }: RowsProps) => {
    return (
        <Grid item xs={12} sm={12} style={{ borderBottom: "1px solid #8080802b", height: '64px', marginBottom: '13px' }}>
            {children}
        </Grid>
    );

}

export default Rows;
