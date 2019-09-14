import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Card, Grid } from '@material-ui/core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/styles/prism';
import DS from '../../utils/design-system';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from "./select";
import ComponentStories from '../component-stories';

const stories = storiesOf('Components', module);
const codeString = `
const menuitem = ["month", " week", "Yesterday", "Today"];
  <Select size="sm" menus={menuitem}>
 </Select>                
`;
const codeString1 = `
const menuitem = ["month", " week", "Yesterday", "Today"];
    <Select size="lg" menus={menuitem}>
     </Select>
`;
const menuitem = ["month", " week", "Yesterday", "Today"];
stories.add(
    'Select',
    (() => <div>
        <h2> Select </h2>
        <p> Select components are used for collecting user provided information from a list of options.</p>
        <Grid container spacing={40}>
            <ComponentStories syntax={codeString}>
                <Select size="sm" menus={menuitem}>
                </Select>
            </ComponentStories>
            <ComponentStories syntax={codeString1}>
                <Select size="lg" menus={menuitem}>
                </Select>
            </ComponentStories>
        </Grid>
    </div>
    )
);