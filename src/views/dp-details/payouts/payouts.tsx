
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../../../components/card/card';
import CardHeader from '../../../components/card/card-header';
// import Button from '../../../components/Button';
import Row from '../../../components/row/row';
import Statbox from '../../../components/statbox/statbox';
import Select from '../../../components/select/select';
import { Align } from '../styles';
import { Avatars, Boldhead, Left, Right } from './payouts.styles';
import ver from '../../../assets/more-vert.svg'
import car from '../../../assets/car.svg';
import money from '../../../assets/money.svg';
import motor from '../../../assets/motor.svg';
import reward from '../../../assets/reward.svg';

const payoutcontent = [{
    date: "22th january",
    payouts:
        [{
            name: "Rithika Bannerjee",
            id: "ASDF1234QWER5678",
            policyby: " Rohit Sharma",
            amount: "26, 28829",
            policyType: "car"
        },
        {
            name: "Rithika Bannerjee",
            id: "ASDF1234QWER5678",
            policyby: " Rohit Sharma",
            amount: "26, 28829",
            policyType: "motor"
        }]
},
{
    date: "20th january",
    payouts:
        [{
            name: "Rithika Bannerjee",
            id: "ASDF1234QWER5678",
            policyby: " Rohit Sharma",
            amount: "26, 28829",
            policyType: "reward"
        },
        {
            name: "Rithika Bannerjee",
            id: "ASDF1234QWER5678",
            policyby: " Rohit Sharma",
            amount: "26, 28829",
            policyType: "money"
        },
        {
            name: "Rithika Bannerjee",
            id: "ASDF1234QWER5678",
            policyby: " Rohit Sharma",
            amount: "26, 28829",
            policyType: "money"
        }]
}];
const menuitem = ["month", " week", "Yesterday", "Today"];
const Payouts = (props) => {
    return (
        <Card header={<CardHeader left="Mintcoins Statement / Payouts" right={<button />} />}>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <Grid container spacing={16}>
                <Grid item sm={4} >
                    <Statbox >
                        <Left>13,20,400</Left>
                        <Right >Earned</Right>
                    </Statbox>
                </Grid>
                <Grid item sm={4} >
                    <Statbox >
                        <Left>13,20,400</Left>
                        <Right >Earned</Right>
                    </Statbox>
                </Grid>
                <Grid item sm={4} >
                    <Select size="lg" menus={menuitem}>
                    </Select>
                </Grid>
                {payoutcontent.map((item, idx) =>
                    <Grid item sm={12} key={idx}>
                        <h4 className="datefontTM"> {item.date} </h4>
                        < Card>
                            {item.payouts.map((p, idx) =>
                                <Row key={idx} >
                                    <Align>
                                        <Avatars alt="Remy Sharp" src={
                                            p.policyType == 'car' ? (car) : p.policyType == 'motor' ? (motor) : p.policyType == 'money' ? (money) : (reward)} className="smallavatarTM" />
                                    </Align>
                                    <Align>
                                        <Boldhead>{p.name}</Boldhead><br />
                                        <Align color="grey">
                                            {p.id}<br /> By: {p.policyby}
                                        </Align>
                                    </Align>
                                    <Align align="right">
                                        <Boldhead>{p.amount} </Boldhead><img src={ver} alt="Rightmenu" style={{ verticalAlign: 'middle', paddingLeft: ' 24px' }} />
                                    </Align>
                                </Row>)}
                        </ Card>
                    </Grid>)}
            </Grid>
        </Card >
    );
}
export default Payouts;
