
import React, { Fragment } from 'react';
import { Page, Total } from "./pagination.styles";
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import { PAGESIZES } from "../../utils/constants";
import { DisplayPropTypes } from './pagination.typings';
import Grid from '@material-ui/core/Grid';

const Display = ({ start, end, total, handleChange, pageSize }: DisplayPropTypes ) => {
    console.log(start, end, total, pageSize)
    return(
        <Grid container spacing={24} alignItems='center'>
            <Grid item sm={4}>
                <span>Rows per page: </span>
            </Grid>
            <Grid item sm={3}>
                <Select
                    onChange={e => handleChange(parseInt(e.target.value, 10))}
                    value={pageSize}
                >
                    {PAGESIZES.map(page => <MenuItem value={page}>{page}</MenuItem>)}
                </Select>
            </Grid>
            <Grid item sm={5}>
                <Page>
                    {start} - {end}
                </Page>
                of <Total> {total} </Total>
            </Grid>
        </Grid>
    )
};

export default Display;