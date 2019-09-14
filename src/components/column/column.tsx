
import React from 'react';
import { Numberheading, Label } from './column.styles';
import Grid from '@material-ui/core/Grid';

const Columns = (props) => {
    const columnvalue = props.column;
    const border = {
        borderRight: "1px solid rgba(215, 212, 212, 0.23)"
    }
    const style = {
        height: "168px",
    }
    return (
        <Grid container spacing={24} style={style}>
            {columnvalue.map((item, idx) =>
                <Grid item xs={columnvalue.length == 1 ? (12) : (4)} key={idx} style={columnvalue.length != 1 ? border : {}}>
                    <Numberheading color={item.color}>{item.number}</Numberheading>
                    <Label>{item.label}</Label>
                </Grid>)}
        </Grid>
    );

}

export default Columns;
