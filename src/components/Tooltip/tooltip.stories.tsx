import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '@material-ui/core';
import Tooltip from './tooltip';
import ComponentAPI from '../component-api';
import ComponentStories from '../component-stories';

const stories = storiesOf('Components', module);

const codeString = `
  <Tooltip size="sm" >
        +
    </Tooltip>
`;

const codeString1 = `
  <Tooltip size="lg" >
        +
    </Tooltip>
`;
const rows = [
    {
        id: 0,
        property: 'size',
        description: 'can be set to small as (sm) large as (lg) or omitted',
        type: 'string',
        default: "-"
    },
];
stories.add(
    'Tooltips',
    (() => <div>
        <h2>Tooltips</h2>
        <p>Tooltips display informative text when users hover over, focus on, or tap an element.</p>
        <h3>Examples <a href="#examples">#</a></h3>
        <Grid container spacing={40}>
            <ComponentStories syntax={codeString} >
                <Tooltip size="sm" >
                    +
                </Tooltip>
            </ComponentStories>
            <ComponentStories syntax={codeString1} >
                <Tooltip size="lg" >
                    +
                </Tooltip>
            </ComponentStories>
        </Grid>
        <ComponentAPI rows={rows} />
    </div>
    )
);