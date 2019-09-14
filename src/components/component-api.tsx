import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid } from '@material-ui/core';

const ComponentAPI = ({ rows }) => <Grid container spacing={40}>
    <Grid item sm={12}>
        <h3>API <a href="#api">#</a></h3>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Property</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Default</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row.id}>
                        <TableCell align="left">{row.property}</TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.default}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Grid>

</Grid>
export default ComponentAPI;