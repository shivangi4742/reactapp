import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Card, Grid } from '@material-ui/core';
import Tab from './tab';
import ComponentStories from '../component-stories';
import ComponentAPI from '../component-api';
const stories = storiesOf('Components', module);

const codeString = `
const tabs = ['Daily', 'Weekly', 'Monthly'];

<Tab activeTab={0} handler={1} tabs={tabs} />
`;
const tabs = ['Daily', 'Weekly', 'Monthly'];

stories.add(
    'Tabs',
    (() => <div>
        <h2>Tabs</h2>
        <p>Tabs make it easy to explore and switch between different views.</p>
        <h3>Examples <a href="#examples">#</a></h3>

        <Grid container spacing={40}>
            <ComponentStories syntax={codeString}>
                <Tab activeTab={0} handler={1} tabs={tabs} />
            </ComponentStories>
        </Grid>


    </div>
    )
);