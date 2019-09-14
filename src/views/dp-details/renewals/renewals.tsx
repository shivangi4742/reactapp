
import React from 'react';
import CardHeader from '../../../components/card/card-header';
import Card from '../../../components/card/card';
import Columns from '../../../components/column/column';
import Select from '../../../components/select/select';
const renewcontent =
    [{
        number: "7",
        label: "Due in 7 days",
        color: "#f44336"
    }, {
        number: "4",
        label: "Due in 30 days"
    },
    {
        number: "2",
        label: "Due in 3 months"
    }];

const menusitems = ["daily", "monthly", "yearly"];
const Renewals = (props) => {
    return (
        <Card header={<CardHeader left="Renewals" right={<Select menus={menusitems} size="sm" />} />} >
            <Columns column={renewcontent} />
        </Card>
    );

}

export default Renewals;
