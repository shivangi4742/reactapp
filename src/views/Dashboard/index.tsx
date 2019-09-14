import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/card/card';
// import Button from '../../components/Button';
import Accordian from '../../components/accordian/accordian';
import Select from '../../components/select/select';
import Statbox from '../../components/statbox/statbox';
import Avatar from '@material-ui/core/Avatar';
import Columns from '../../components/column/column';
import Accordianheader from '../../components/accordian/accordian-header';
import Rows from '../../components/row/row';
import CardHeader from '../../components/card/card-header';
import Cardfooter from '../../components/card/card-footer';
import src from '../../assets/avatar.png'
import { Leftalign, Rightalign, Greyalign } from './styles';
import ver from '../../assets/more-vert.svg'
import car from '../../assets/car.svg';
import money from '../../assets/money.svg';
import motor from '../../assets/motor.svg';
import reward from '../../assets/reward.svg';
// import Header from '../DPDetails/Header';

const renewcontent =
    [{
        number: "7",
        label: "Due in 7 days",
        color: "#f44336"
    }, {
        number: "7",
        label: "Due in 7 days"
    },
    {
        number: "7",
        label: "Due in 7 days"
    }];

const issuancecontent = [{
    number: "7",
    label: "Due in 7 days",
    color: "#f44336"
}];

const RemarksContent = {
    remarks: [{
        remarkcontent: "Remark 1 -  Selected from the predefined remarks in the list",
    }, {
        remarkcontent: "Remark 1 -  Selected from the predefined remarks in the list",
    },
    ]
};
const menuitem = ["month", " week", "Yesterday", "Today"];
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


const rows = [
    {
        id: 0,
        content: 'name',
        value: 'shivangi'
    },
    {
        id: 1,
        content: 'City',
        value: 'jjehddhf kdhsk',
    },
    {
        id: 2,
        content: 'value',
        value: 'jjehddhf kdhsk',
    }
];

const Dashboard = (props) => {
    // console.log(props.match.params.id);
    return (
        <div >
            {/* <Header /> */}
            <Grid container spacing={24} style={{ width: '100%', margin: '0px' }}>
                <Grid item sm={8}>
                    <Grid container spacing={24}>
                        <Grid item sm={6} >
                            <Card footer={<Cardfooter title="More Details" rows={rows} />} >
                                <Grid container spacing={16}>
                                    <Grid item sm={4} >
                                        <Avatar alt="Remy Sharp" src={src} className="pavatarTM" />
                                    </Grid>
                                    <Grid item sm={8}  >
                                        <div style={{ textAlign: 'left' }}>
                                            <div>
                                                <b>Mooppan Nallaperumal Nambi </b>
                                            </div>
                                            <br />
                                            Male<br />
                                            9998787654 | 9998787654 <br />
                                            abc@xyz.com <br />
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>

                        </Grid >
                        <Grid item sm={6} >
                            <Card footer={<Cardfooter title="SHOW ALL" />} tooltip="yes" >
                                <Grid container spacing={16}>
                                    <Grid item sm={12} style={{ textAlign: 'left' }} >
                                        <div>
                                            <b>Note</b>
                                        </div>
                                        <br />
                                        Remark 1 -  Selected from the predefined remarks in the list <br />
                                        Remark 2 -  Selected from the predefined remarks in the list
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid >
                        <Grid item sm={12} >
                            <Card header={<CardHeader left="Sales Performance" right={<Select menus={menuitem} size="sm" />} />} content={RemarksContent} >
                            </Card>
                        </Grid>
                        <Grid item sm={4} >
                            <Card header={<CardHeader left="Last 7 days" border />} >
                                hdsgfjkshkfd
                            </Card>
                        </Grid>
                        <Grid item sm={4} >
                            <Card header={<CardHeader left="Last 30 days" />} />
                        </Grid>
                        <Grid item sm={4} >
                            <Card header={<CardHeader left="Last 3 months" />} />
                        </Grid>
                        <Grid item sm={4} >
                            <Card header={<CardHeader left="Issuance" />}>
                                <Columns column={issuancecontent} />
                            </Card>
                        </Grid>
                        <Grid item sm={8} >
                            <Card header={<CardHeader left="Policy with Cheque" border />}>
                                <Columns column={renewcontent} />
                            </Card>
                        </Grid>
                        <Grid item sm={8} >
                            <Card header={<CardHeader left="Renewals" border />} >
                                <Columns column={renewcontent} />
                            </Card>
                        </Grid>
                        <Grid item sm={4} > </Grid>
                        <Grid item sm={12} >
                            <Card header={<CardHeader left="Mintcoins Statement / Payouts" right={<button />} />}>
                                <div>&nbsp;</div>
                                <div>&nbsp;</div>
                                <Grid container spacing={24}>
                                    <Grid item sm={4} >
                                        <Statbox left="23, 37638" right="hgd" />
                                    </Grid>
                                    <Grid item sm={4} >
                                        <Statbox left="23, 37638" right="hgd" />
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
                                                    <Rows key={idx}>
                                                        <Leftalign>
                                                            <Avatar alt="Remy Sharp" src={
                                                                p.policyType == 'car' ? (car) : p.policyType == 'motor' ? (motor) : p.policyType == 'money' ? (money) : (reward)} className="smallavatarTM" />
                                                        </Leftalign>
                                                        <Leftalign>
                                                            {p.name}<br />
                                                            <Greyalign>
                                                                {p.id}<br /> By: {p.policyby}
                                                            </Greyalign>
                                                        </Leftalign>
                                                        <Rightalign>
                                                            {p.amount} <img src={ver} alt="Rightmenu" style={{ verticalAlign: 'middle', paddingLeft: ' 24px' }} />
                                                        </Rightalign>
                                                    </Rows>)}
                                            </ Card>
                                        </Grid>)}
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} >
                    <Accordian header={<Accordianheader title="Quick Response" left='' right='' />}>
                        <Rows >
                            <Leftalign>
                                Rithika Banrjee<br />
                                <Greyalign>ASDF1234QWER5678 <br />By: Rohit Sharma</Greyalign>
                            </Leftalign>
                            <Rightalign>12,23,455</Rightalign>
                        </Rows>
                    </Accordian>
                    <Accordian header={<Accordianheader left={<button />} title="Offers"  right='' />}>
                        <Rows >
                            <Leftalign>
                                <Avatar alt="Remy Sharp" src={src} style={{
                                    margin: 10,
                                    width: 20,
                                    height: 20, verticalAlign: 'middle',
                                }} />
                            </Leftalign>
                            <Leftalign>
                                Rithika Banrjee<br />
                                <Greyalign>ASDF1234QWE20R5678 <br />By: Rohit Sharma</Greyalign>
                            </Leftalign>

                            <Rightalign>12,23,455</Rightalign>
                        </Rows>
                    </Accordian>
                    <Accordian header={<Accordianheader left={<button />}right=''  title="Support Tickets" />}>
                        <Rows >
                            <Leftalign>
                                Issue with earning
                           <br />
                                <Greyalign>ASDF1234QWER5678</Greyalign>
                            </Leftalign>
                            <Rightalign>Open
                                 <Greyalign>22 Oct, 2018</Greyalign>
                            </Rightalign>
                        </Rows>
                    </Accordian>
                </Grid>

            </Grid>
        </div>
    );

}


export default Dashboard;
