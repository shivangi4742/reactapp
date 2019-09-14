import { createReducer } from 'reduxsauce';
import { FluxStandardAction } from '../../../global.typings';
import { Reducer } from 'redux';

import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    fetchSalesPerf: ['payload'],
    salesPerfSuccess: ['payload'],
    salesPerfError: ['error']
})

export const INITIAL_STATE = { data: [], error: {}};

export const salesPerfSuccess: Reducer<object, FluxStandardAction> = (state = INITIAL_STATE, action) => {
    // console.log('reducer ', action);
    return { ...state, data: action.payload };
};

export const salesPerfError: Reducer<object, FluxStandardAction> = (state = INITIAL_STATE, action) => ({ ...state, error: action.error });

export const HANDLERS = {
    [Types.SALES_PERF_SUCCESS]: salesPerfSuccess,
    [Types.SALES_PERF_ERROR]: salesPerfError
};
export default createReducer(INITIAL_STATE, HANDLERS);
