import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function SimpleTable(props) {
    const rows = props.rows;
   
        return (
            <Table style={{ width: "100%" }} >
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id} style={{ background: row.id % 2 ? 'white' : '#e7f2ff' }}>
                            <TableCell component="th" scope="row">
                                {row.left}
                            </TableCell>
                            {row.center ? (<TableCell align="left">
                                {row.center}
                            </TableCell>) : ('')}
                            <TableCell align="right">
                                {row.right}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
   

    export default SimpleTable;