
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../../../components/card/card';
import Cardfooter from '../../../components/card/card-footer';
import { Heading, Info, Align } from '../styles';
import Tooltip from '../../../components/tooltip/tooltip';

const Notes = (props) => {
    return (
        <Card footer={<Cardfooter title="SHOW ALL" />} tooltip="yes" height={146}>
            <div className="tooltipTM" ><Tooltip > + </Tooltip> </div>
            <Grid container spacing={16}>
                <Grid item sm={12}  >
                    <Heading>  Note </Heading> <br />
                    <Info>
                        Remark 1 -  Selected from the predefined remarks in the list <br />
                        Remark 2 -  Selected from the predefined remarks in the list
                    </Info>
                    <br />
                    <Align color="rgba(0, 0, 0, 0.54)"> Abhishek Singh</Align>
                    <Align align='right' color="rgba(0, 0, 0, 0.54)">4th Jan, 2019 10:30 am</Align>
                </Grid>
            </Grid>
        </Card>
    );

}

export default Notes;
