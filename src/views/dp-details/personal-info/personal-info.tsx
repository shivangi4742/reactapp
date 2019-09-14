
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../../../components/card/card';
import Cardfooter from '../../../components/card/card-footer';
import { Heading, Info } from '../styles';
import { Avatars } from './personal-info.styles';
import src from '../../../assets/avatar.png'
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

const list =
{
    id: 0, name: ' Mooppan Nallaperumal Nambi', Gender: 'M', phone: '9876543765', email: 'shivangi.oneture.com', mobileNumber: '9876544433'
};
const PersonalInfo = (props) => {
    return (
        <Card footer={<Cardfooter title="MORE DETAILS" rows={rows} />} height={146}  >
            <Grid container spacing={16} >
                <Grid item sm={4} xs={5} >
                    <Avatars alt="Remy Sharp" src={src} />
                </Grid>
                <Grid item sm={8} xs={7}  >
                    <Heading>
                        {list.name}
                    </Heading> <br />
                    <Info>
                        {list.Gender == 'M' ? ("Male") : list.Gender == "F" ? ("Female") : ('Others')}<br />
                        {list.phone}   {list.mobileNumber ? '|' : ''}  {list.mobileNumber} <br />
                        {list.email} <br />
                    </Info>
                </Grid>
            </Grid>
        </Card>
    );

}

{ }


export default PersonalInfo;
