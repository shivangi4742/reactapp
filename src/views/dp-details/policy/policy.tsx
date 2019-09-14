
import React from 'react';
import CardHeader from '../../../components/card/card-header';
import Card from '../../../components/card/card';
import Columns from '../../../components/column/column';
import Select from '../../../components/select/select';
const policycontent =
    [{
        number: "7",
        label: "Not Received",
        color: "#f44336"
    }, {
        number: "4",
        label: "Cleared"
    },
    {
        number: "2",
        label: "Cheque bounce"
    }];
const menusitem = ['daily', 'weekly', 'monthly'];
const Issuance = (props) => {
    return (
        <Card header={<CardHeader left="Policy" right={<Select menus={menusitem} size="sm" />} />}>
            <Columns column={policycontent} />
        </Card>
    );

}

export default Issuance;
