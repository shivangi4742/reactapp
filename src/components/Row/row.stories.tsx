import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '@material-ui/core';
import Rows from './row';
import { Paper } from '@material-ui/core';
import ComponentStories from '../component-stories';

const stories = storiesOf('Components', module);

const codeString = ` 
    <Rows >
        add child components
     </Rows>    
`;

stories.add(
    'Rows',
    (() => <div>
        <h2> Rows </h2>
        Rows components are used for collecting informations in rows form.
       <Grid container spacing={40}>
            <ComponentStories syntax={codeString}>
                <Paper>
                    <Rows >
                        add child components
                    </Rows>
                    <Rows >
                        add child components
                    </Rows>
                </Paper>
            </ComponentStories>
        </Grid>
    </div>
    )
);