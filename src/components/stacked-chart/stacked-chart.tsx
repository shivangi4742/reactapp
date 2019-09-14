import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import defaultConfig from './stacked-chart.config';
import ReactHighchart from 'react-highcharts';
import merge from 'lodash/fp/merge';


const usePrevious = (value) => {
    const previousConfigRef = useRef(defaultConfig);
    useEffect(() => {
        previousConfigRef.current = merge(previousConfigRef.current, value);
    }, [])
    const previousConfig = previousConfigRef.current;
    return previousConfig;
}


const StackedChart = ({ config }) => {
    const previousConfig = usePrevious(config);
    const mergedConfig = merge(previousConfig, config);
    return (
        <ReactHighchart config={mergedConfig}></ReactHighchart>
    )
}
export default StackedChart;