import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Card, Grid } from '@material-ui/core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/styles/prism';
import Tables from './table';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ComponentStories from '../component-stories'

const stories = storiesOf('Components', module);

const codeString = `
const rows = [
    {
        id: 0,
        left: 'name',
        right: 'name'
    },
    {
        id: 1,
        left: 'value',
        right: 'value'
    }
]
 <Tables rows={rows}> </Tables>        
`;
const rows = [
    {
        id: 0,
        left: 'name',
        right: 'name'
    },
    {
        id: 1,
        left: 'value',
        right: 'value'
    }
];
const rows2 = [
    {
        id: 0,
        left: 'name',
        center: 'hello',
        right: 'name'
    },
    {
        id: 1,
        left: 'value',
        center: 'hello',
        right: 'value'
    }
]
const codeString1 = `
const rows2 = [
    {
        id: 0,
        left: 'name',
        center: 'hello',
        right: 'name'
    },
    {
        id: 1,
        left: 'value',
        center: 'hello',
        right: 'value'
    }
]
 <Tables rows={rows}> </Tables>        
`;

stories.add(
    'Table',
    (() => <div>
        <h2>Tables</h2>
        <p>Data tables display sets of data. They can be fully customized.</p>
        <h3>Examples <a href="#examples">#</a></h3>
        <Grid container spacing={40}>
            <ComponentStories syntax={codeString} >
                <Paper> <Tables rows={rows}> </Tables></Paper>
            </ComponentStories>
            <ComponentStories syntax={codeString1} >
                <Paper> <Tables rows={rows2}> </Tables></Paper>
            </ComponentStories>
        </Grid>

    </div>
    )
);