import React from 'react';
import { Card, Avatar, Grid } from "@material-ui/core";
import Accordian from '../../../components/accordian/accordian';
import Accordianheader from '../../../components/accordian/accordian-header';
import Row from '../../../components/row/row';
import { Align } from './quick-summary.styles';
const quicksummary = [
    {
        id: 0,
        left: 'Joined on',
        leftBottom: '',
        right: '1 yr 6 months',
        rightBottom: '22 Oct, 2017',

    },
    {
        id: 1,
        left: 'Highest value quote',
        leftBottom: '',
        right: '1 yr 6 months',
        rightBottom: '',
        color: '#000000 '
    },
    {
        id: 2,
        left: 'Cheque bounced',
        leftBottom: '',
        right: '2',
        rightBottom: '',
        color: 'red'
    }
];
const QuickSummary = () => {
    return (
        <Accordian header={<Accordianheader title="Quick Summary" left='' right="" />} type='primary' >
            <Grid container>
                {quicksummary.map((q, id) =>
                    <Row key={id} >
                        <Align color={q.color}>
                            {q.left}<br />
                            <Align color="rgba(0, 0, 0, 0.54)">{q.leftBottom}</Align>
                        </Align>
                        <Align align="right">{q.right}<br />
                            <Align color="rgba(0, 0, 0, 0.54)"> {q.rightBottom}</Align>
                        </Align>
                    </Row>
                )}
            </Grid>
        </Accordian>);
}

export default QuickSummary;