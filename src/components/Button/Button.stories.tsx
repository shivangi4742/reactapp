import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button';
import { Grid } from '@material-ui/core';
import ComponentStories from '../component-stories';
import ComponentAPI from '../component-api';
import Storiesheader from '../stories-header';

const stories = storiesOf('Components', module);

const codeString = `
<Button type='primary'> Primary </Button>
<Button>Default</Button>
<Button disable> Disable </Button>
 <Button type="dashed">Dashed</Button>
 <Button type="danger">Danger</Button>
`;
const codeString1 = `
    <Button type='primary' size='sm'>
        Small
    </Button>
    <Button size='md'>
        Medium
    </Button>
    <Button size='lg'>
        Large
    </Button>
`;
const codeString2 = `
 <Button type='share' >
     share
   </Button>
<Button type='notification'>
        1
</Button>
 <Button type='remarks'>
   Add remarks
</Button>`;
const rows = [
    {
        id: 0,
        property: 'size',
        description: 'can be set to small as (sm) large as (lg) or omitted',
        type: 'string',
        default: "-"
    },
    {
        id: 1,
        property: 'type',
        description: 'can be set to primary ghost dashed danger or omitted (meaning default)',
        type: 'string',
        default: "-"
    }

]
stories.add(
    'Button',
    (() => <div>
        <Storiesheader heading="Button" shortdesc="To trigger an operation." desc="A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic."></Storiesheader>
        <h3>Examples <a href="#examples">#</a></h3>
        <Grid container spacing={40}>
            <ComponentStories syntax={codeString} >
                <Button type='primary'> Primary </Button>{' '}
                <Button>Default</Button>{' '}
                <Button disabled>   Disable </Button>{' '}
                <Button type="dashed">Dashed</Button>{' '}
                <Button type="danger">Danger</Button>
            </ComponentStories>
            <ComponentStories syntax={codeString1} >
                <Button type='primary' size='sm'>
                    Small
               </Button> {' '}
                <Button size='md'>
                    Medium
               </Button> {' '}
                <Button size='lg'>
                    Large
                </Button>
            </ComponentStories>
            <ComponentStories syntax={codeString2} >
                <Button type='share' >
                    share
                  </Button> {' '}
                <Button type='notification'>
                    1
              </Button> {' '}
                <Button type='remarks'>
                    Add remarks
                </Button>
            </ComponentStories>

        </Grid>
        <ComponentAPI rows={rows} />
    </div>
    )
);