import React, { useState, useEffect } from 'react';
import { Card, Avatar, Grid } from "@material-ui/core";
import Accordian from '../../../components/accordian/accordian';
import Accordianheader from '../../../components/accordian/accordian-header';
import Row from '../../../components/row/row';
import { Align } from '../styles';
// import Button from '../../../components/Button';
import src from '../../../assets/avatar.png';

import { useDispatch } from 'redux-react-hook';
const offers = [{
    oid: 1,
    offerName: "Panasonic LED TV",
    offerimage: "",
    amountreq: "15.4 Lacs required",
    timeremaining: "20 days left",
    amount: "5 Lacs",
    policytype: "Premium"
}, {
    oid: 2,
    offerName: "Panasonic LED TV",
    offerimage: "",
    amountreq: "24.2 Lacs required",
    timeremaining: "20 days left",
    amount: "5 Lacs",
    policytype: "Premium"
},
{
    oid: 3,
    offerName: "Trip to Bali - For Couple",
    offerimage: "",
    amountreq: "15.4 Lacs required",
    timeremaining: "20 days left",
    amount: "5 Lacs",
    policytype: "Premium"
}
];

const Offers = () => {

    const dispatch = useDispatch();
    // Used here to test epics
    /*   useEffect(() => {
          // dispatch(addCall(['Sample remark1']));
          dispatch(fetchOffersepics(' ', '', {}));
      }) */
    return (<Accordian header={<Accordianheader title="Offers" right="" left={<button />} />}>
        <Grid container>
            {offers.map((o, id) =>
                <Row key={id}>
                    <Align>
                        <Avatar alt="Remy Sharp" src={src} style={{
                            margin: 10,
                            width: 20,
                            height: 20, verticalAlign: 'middle',
                        }} />
                    </Align>
                    <Align color="#000000 ">
                        {o.offerName}<br />{o.amountreq} <br />
                        <Align color="rgba(0, 0, 0, 0.38);">{o.timeremaining}</Align>
                    </Align>
                    <Align align='right'>{o.amount}<br />
                        <Align color="rgba(0, 0, 0, 0.38);">{o.policytype}</Align></Align>
                </Row>
            )}
        </Grid>
    </Accordian>);
}

export default Offers;