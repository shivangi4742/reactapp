import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '@material-ui/core';
import Label from "./label";
import ComponentAPI from '../component-api';
import ComponentStories from '../component-stories';
const stories = storiesOf('Components', module);

const codeString = `
  <Label status="active">
    </Label>`
    ;
const codeString1 = `
  <Label status="inactive">
   </Label >
`;
const rows = [{
    id: 0,
    property: 'size',
    description: 'can be set to status as active, inactive, or certified',
    type: 'string',
    default: "-"
}]
stories.add(
    'Label',
    (() => <div>
        <h2> Label </h2>
        Label components are used for collecting user provided information from a list of options.
        <Grid container spacing={16}>

            <ComponentStories syntax={codeString} >
                <Label status="active">
                </Label>
            </ComponentStories>

            <ComponentStories syntax={codeString1} >
                <Label status="inactive">
                </Label>
            </ComponentStories>

        </Grid>
        <ComponentAPI rows={rows} />
    </div>
    )
);