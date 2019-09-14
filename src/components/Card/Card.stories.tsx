import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Cards from './card';
import Cardfooter from './card-footer';
import Accordianheader from './card-header';
import { Grid } from '@material-ui/core';

import ComponentStories from '../component-stories';

const stories = storiesOf('Components', module);

const codeString = `
 <Cards>
  you can add the child components on that.
 </Cards>
`;
stories.add(
    'Card',
    (() => <div>
        <Grid container spacing={40}>
            <ComponentStories syntax={codeString} >
                <Cards>
                    you can add the child components on that.
                </Cards>
            </ComponentStories>
        </Grid>
    </div>
    )
);