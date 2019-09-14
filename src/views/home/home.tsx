import React from 'react';
import { Paper } from '@material-ui/core';
// import SalesPerformance from '../DPDetails/SalesPerformance/index';
// import Header from '../DPDetails/Header';


const Home = ({ path, location }) => {
    return (
        <div>
            {/* <Header />
            <SalesPerformance /> */}
            <Paper className='p40'>
                <ul>
                    <li>React Hooks</li>
                    <li>React Router</li>
                    <li>React Loadable</li>
                    <li>Redux</li>
                    <li>RXJS ( Redux observables ) </li>
                    <li>TypeScript</li>
                    <li>TDD by Jest/Enzyme</li>
                    <li>Storybook</li>
                    <li>Material UI</li>
                    <li>Lodash FP</li>
                    <li>React HighCharts</li>
                </ul>
            </Paper>
        </div>
    )
}
export default Home;