import React, { useCallback, useState, useEffect, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TmTab from '../../../components/tab/tab';
import StackedChart from '../../../components/stacked-chart/stacked-chart';
import { useDispatch, useMappedState } from 'redux-react-hook';
import salesReducer, { Creators } from './sales-perf.reducers';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useInjectReducer from '../../../utils/inject-reducer-hook';
import { fetchSalesEpic } from './sales-perf.epics';
import { addEpic } from '../../../root-epic';

const tabs: string [] = ['Daily', 'Weekly', 'Monthly'];
const days: string [] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const weeks: string [] = ['1st', '2nd', '3rd', '4th', '5th'];
const months: string [] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

useInjectReducer('salesReducer', salesReducer);

// Dynamic epic injection
addEpic(fetchSalesEpic)


export const getMonths = (durationMonths: number): string [] => {
    const date = new Date();
    const currentMonth = date.getMonth();
    let formedMonths: string [] = [];
    if (currentMonth < durationMonths) {
        formedMonths = months.slice(-(durationMonths- currentMonth));
        formedMonths.push(...months.slice(0, currentMonth))
    }
    return formedMonths;
}
export const getDuration = (duration: string): number => {
    const durationMonths: number = parseInt(duration[duration.length - 1], 10);
    return durationMonths;
}
export const getPeriod = (tabIndex: number, duration: string): string => {
    switch(tabIndex){
        case 0:
           return '7d';
        case 1:
            return '4w';
        case 2: {
            const durationMonths: number = getDuration(duration);
            return `${durationMonths}m`;
        }
        default:
            return '7d';
    }
}
export const computeAxes = (tabIndex: number, duration: string): string [] => {
    let axes: string[];
    if (tabIndex === 1) {
        axes = weeks;
    } else if (tabIndex === 2) {
        const durationMonths: number = parseInt(duration[duration.length - 1], 10);
        const months = getMonths(durationMonths);
        axes = months;
    } else {
        axes = days;
    }
    return axes;
}

// Custom Hook
export const useTab = (activeTab: number) => {
    const [tabIndex, setTab] = useState(activeTab);
    const handleChange = useCallback(
        (e, value) => {
            setTab(value);
        },
        [tabIndex]
    );
    return [tabIndex, handleChange];
}

export const useDuration = (defaultDuration: string): [string, (e: React.ChangeEvent<HTMLSelectElement>, child: React.ReactNode) => void] => {
    const [duration, setDuration] = useState(defaultDuration);

    const handleDurationChange = useCallback(
        (e) => {
            setDuration(e.target.value);
        },
        [duration]
    );
    return [duration, handleDurationChange];
}



const SalesPerformance = () => {
    const [tabIndex, handleTabChange] = useTab(0);
    const [duration, handleDurationChange] = useDuration('last3');
    const [xAxis, setAxes] = useState(days);
    const mapState = useCallback(
        (state) => {
            // console.log('data', state.get('salesReducer').data)
            const data = state.get('salesReducer').data;
            return { data }
        },
        [tabIndex, duration]
    );
    const { data } = useMappedState(mapState);
    const dispatch = useDispatch();

    // Handle Side effect to change xAxis based on tab and duration
    useEffect(
        () => {
            // Change X Axis 
            const axes = computeAxes(tabIndex as number, duration);
            setAxes(axes);

            // Fetch Data
            const period = getPeriod(tabIndex as number, duration);
            dispatch(
                Creators.fetchSalesPerf({ period, current: false })
            )
        },
        [tabIndex, duration]
    );

    return (
        <section>
            <Paper className='mTB30'>
                <Grid container className='p15'>
                    <Grid item sm={4} lg={4} className='text-left'>
                        <h3>Sales Performance</h3>
                    </Grid>
                    <Grid item sm={4} lg={4}>
                        <TmTab activeTab={tabIndex} handler={handleTabChange} tabs={tabs} />
                    </Grid>
                    {
                        (tabIndex === 2) ?
                            <Grid item sm={4} lg={4} className='text-right'>
                                <FormControl variant="outlined">
                                    <InputLabel
                                        htmlFor="outlined-month-simple"
                                    >
                                        Month
                                    </InputLabel>
                                    <Select
                                        value={duration}
                                        onChange={handleDurationChange}
                                        input={
                                            <OutlinedInput
                                                labelWidth={0}
                                                name="month"
                                                id="outlined-month"
                                            />
                                        }
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="last3">Last 3 months</MenuItem>
                                        <MenuItem value="last6">Last 6 months</MenuItem>
                                        <MenuItem value="last9">Last 9 months</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid> : null
                    }
                </Grid>
                <Grid container>
                    <Grid item sm={12}>
                        <StackedChart config={{ series: data, xAxis: { categories: xAxis} }} />
                    </Grid>
                </Grid>
            </Paper>
        </section>
    );
};

export default SalesPerformance;
