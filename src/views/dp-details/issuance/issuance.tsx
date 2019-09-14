
import React from 'react';
import CardHeader from '../../../components/card/card-header';
import Card from '../../../components/card/card';
import Columns from '../../../components/column/column';

const issuancecontent = [{
    number: "2",
    label: "Due in 7 days",
    color: "#f44336"
}];

const Issuance = (props) => {
    return (
        <Card header={<CardHeader left="Issuance"/> }>
            <Columns column={issuancecontent} />
        </Card>
    );

}

export default Issuance;
