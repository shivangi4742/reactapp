import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Accordian from './accordian';
import Accordianheader from './accordian-header';
import { Grid } from '@material-ui/core';
import ComponentAPI from '../component-api';
import Button from '../Button/button';
import ComponentStories from '../component-stories';
import Storiesheader from '../stories-header';
const stories = storiesOf('Components', module);

const codeString = `
 <Accordian header={<Accordianheader title="hello" type="primary" />}>
          add child components.
</Accordian>
`;
const codeString1 = `
 <Accordian header={<Accordianheader title="hello" />} >
          add child components.
 </Accordian>
`;
const codeString2 = `
<Accordian header={<Accordianheader title="hello" />} footer={<Button>save</Button>} >
        add child components.
</Accordian>
`;
const codeString3 = `
<Accordian header={<Accordianheader title="hello" />} disabled>
        add child components.
</Accordian>
`;

const rows = [
    {
        id: 1,
        property: 'type',
        description: 'can be set to primary for black header',
        type: 'string',
        default: "-"
    },
    {
        id: 2,
        property: 'disabled',
        description: 'can be set to disabled',
        type: 'boolean',
        default: "-"
    },
    {
        id: 2,
        property: 'header, footer',
        description: 'can be pass header, footer & childcomponents',
        type: 'components',
        default: "-"
    }
]
stories.add(
    'Accordian',
    (() => <div>
        <Storiesheader desc="Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time." shortdesc="A content area which can be collapsed and expanded." heading="Accordian" />
        <h3>Examples <a href="#examples">#</a></h3>

        <Grid container spacing={40}>
            <ComponentStories syntax={codeString} >
                <Accordian header={<Accordianheader title="hello" />} type="primary" >
                    add child components.
                </Accordian>
            </ComponentStories>
            <ComponentStories syntax={codeString1} >
                <Accordian header={<Accordianheader title="hello" />} >
                    add child components.
                </Accordian>
            </ComponentStories>
            <ComponentStories syntax={codeString2} >
                <Accordian header={<Accordianheader title="hello" />} footer={<Button>save</Button>} >
                    add child components.
                 </Accordian>
            </ComponentStories>
            <ComponentStories syntax={codeString3} >
                <Accordian header={<Accordianheader title="hello" />} disabled >
                    add child components.
                 </Accordian>
            </ComponentStories>
        </Grid>
        <ComponentAPI rows={rows} />
    </div >
    )
);

