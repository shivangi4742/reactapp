import React, { useCallback, useState, useEffect } from 'react';
import Accordian from '../../../components/accordian/accordian';
import Accordianheader from '../../../components/accordian/accordian-header';
import Row from '../../../components/row/row';
import { Align } from './support-tickets.styles';
import Button from '../../../components/button/button';
import Grid from '@material-ui/core/Grid';

const Tickets = () => {
    const issuecontent = [{
        issuename: "Issue with earning ",
        issueid: "ASDF1234QWER5678",
        issuetype: "Open",
        issuedate: "22 Oct, 2018"
    },
    {
        issuename: "Issue with earning ",
        issueid: "ASDF1234QWER5678",
        issuetype: "Closed",
        issuedate: "22 Oct, 2018"
    }];
    const [content, setLocation] = useState(issuecontent)

    return (
        <Accordian header={<Accordianheader title="Support tickets" right="" left={<button />} />}>
            <Grid container>
                {content.map((i, id) =>
                    <Row key={id}>
                        <Align>
                            {i.issuename}<br />
                            <Align color="#9B9B9B">{i.issueid}</Align>
                        </Align>
                        <Align align='right' color={i.issuetype}>{i.issuetype}<br />
                            <Align color="#9B9B9B">{i.issuedate}</Align>
                        </Align>
                    </Row>
                )}
            </Grid>
        </Accordian>
    );
}
export default Tickets;