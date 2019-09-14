import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Card, Grid } from '@material-ui/core';

import Statbox from './statbox';
import { Left, Right } from '../../views/dp-details/payouts/payouts.styles';
import ComponentStories from '../component-stories';
const stories = storiesOf('Components', module);

const codeString = `
   <Statbox>
     <Left>11,23,3678</Left>
    <Right>earned</Right>
   </Statbox>
`;


stories.add(
    'Statbox',
    (() => <div>
        <h2>Statbox</h2>
        <p>Statbox is a box with left and right values .</p>
        <h3>Examples <a href="#examples">#</a></h3>

        <Grid container spacing={40}>
            <ComponentStories syntax={codeString}>
                <Statbox>
                    <Left>11,23,3678</Left>
                    <Right>earned</Right>
                </Statbox>
            </ComponentStories>
        </Grid>


    </div>
    )
);