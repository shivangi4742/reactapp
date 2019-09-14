import React from 'react';
import { Link } from "react-router-dom";
import { RouteChildrenProps } from 'react-router';

const list = [
    {
        id: 100, name: 'Kushal Mahajan', statusTags: ['inactive', 'certified'], gender: 'M'
    },
    {
        id: 101, name: 'Joy Biswas', statusTags: ['active', 'certified'], gender: 'M'
    },
    {
        id: 102, name: 'Subash Bose', statusTags: ['certified', 'active'], gender: 'M'
    }
];

const DPList = ({ match }: RouteChildrenProps) =>  {
    return (
        <div className='p40'>
            <ul>
                {
                    list.map( (item, idx) => (
                        <li key={idx}>
                            <Link to={{
                                pathname: `${match.url}/${item.name}`,
                                state: { dp: item }
                            }}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DPList;
