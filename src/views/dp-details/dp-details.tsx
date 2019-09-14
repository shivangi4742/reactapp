import React, { useCallback, useEffect, useState } from 'react';
import SalesPerformance from './sales-performance/sales-perf';
import Header from './header/header';
import { RouteChildrenProps } from 'react-router';
import SectionMain from './styles';
import Grid from '@material-ui/core/Grid';
import QuickSummary from './quick-summary/quick-summary';
import PersonalInfo from './personal-info/personal-info';
import Notes from './notes/notes';
import Payouts from './payouts/payouts';
import Issuance from './issuance/issuance';
import Policy from './policy/policy';
import Renewals from './renewals/renewals';
import Offers from './offers/offers';
import Tickets from './support-tickets/support-tickets';
import Pagination from '../../components/pagination/pagination';
import Card from '@material-ui/core/Card';


const res = {
    total: 100,
    data: []
}
const DpDetails = ({ location }: RouteChildrenProps) => {
    const [ results, setResults ] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(
        () => {
            // API Call for fetching the data
            fetch(`https://google.com/?currentPage=${currentPage}&pageSize=${pageSize}`).then(() => {
                res.data = [
                    { id: 0, name: 'Kushal' },
                    { id: 1, name: 'Anil' },
                    { id: 2, name: 'Sam' }
                ];
                
                setResults(res.data);
            });
        },
        [pageSize, currentPage]
    )

    return (
        <div>
            <Header dp={location.state.dp} />
            <SectionMain style={{ 'marginTop': '88px' }}>
                <Grid container spacing={24}>
                    <Grid item sm={8}>
                        <Grid container spacing={24}>
                            <Grid item sm={6}>
                                <PersonalInfo />
                            </Grid>
                            <Grid item sm={6}>
                                <Notes />
                            </Grid>
                            <Grid item sm={12}>
                                <Card>
                                    Pagination Demo
                                    <ul>
                                        {
                                            results.map((item, idx) => <li key={item.id}>{item.name}</li>)
                                        }
                                    </ul>
                                    {results && results.length ? (<Pagination currentPage={currentPage} pageSize={pageSize} total={100} fetchData={(currentPage, pageSize) => {
                                        // replace this by useReducer hook
                                        setPageSize(pageSize);
                                        setCurrentPage(currentPage);
                                        
                                    }} />) : null }
                                </Card>
                                <SalesPerformance />
                            </Grid>
                            <Grid item sm={12}>
                                <SalesPerformance />
                            </Grid>
                            <Grid item sm={4}>
                                <Issuance />
                            </Grid>
                            <Grid item sm={8}>
                                <Policy />
                            </Grid>
                            <Grid item sm={8}>
                                <Renewals />
                            </Grid>
                            <Grid item sm={4}>

                            </Grid>
                            <Grid item sm={12}>
                                <Payouts />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={4}>
                        <QuickSummary />
                        <Offers />
                        <Tickets />
                    </Grid>
                </Grid>
            </SectionMain>
        </div>
    )
}

export default DpDetails;