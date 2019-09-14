import React from 'react';
import { Types, Creators } from './sales-perf.reducers';
import { ActionsObservable, StateObservable } from 'redux-observable';
import  apiMock from './sales-perf.mock.json';
import { of, Observable } from 'rxjs';
import { fetchSalesEpic } from './sales-perf.epics';
import { toArray } from 'rxjs/operators';
import { salesPerfSuccess, INITIAL_STATE, salesPerfError } from './sales-perf.reducers';
import { shallow } from 'enzyme';
import SalesPerformance from './sales-perf';
import toJson from 'enzyme-to-json';
import { useTab, useDuration } from './sales-perf';
import { FluxStandardAction, Dependencies } from '../../../global.typings';
import ShallowRenderer from 'react-test-renderer/shallow';

// describe('component', () => {
//     it('should test SalesPerformance snapshot', () => {
//         const renderer = new ShallowRenderer();
//         renderer.render(<SalesPerformance />);
//         const result = renderer.getRenderOutput();

//         expect(result).toMatchSnapshot();
//     });

// });

// describe('custom hooks', () => {
//     it('should test useTab hook', () => {
//         const [tabIndex, handleChange] = useTab(0);
//         expect(tabIndex).toBe(0);
        
//         const changeTabResult = handleChange(1);
//         expect(changeTabResult).toBe(1);

//         const changeTabResult2 = handleChange(2);
//         expect(changeTabResult2).toBe(2);

//     });
//     it('should test useDuration hook', () => {
//         const [duration, handleChange] = useDuration('daily');
//         expect(duration).toBe('monthly');

//         const changeDurationResultDaily = handleChange('daily');
//         expect(changeDurationResultDaily).toBe('daily');

//         const changeDurationResultWeekly = handleChange('weekly');
//         expect(changeDurationResultWeekly).toBe('weekly');

//         const changeDurationResultMonthly = handleChange('monthly');
//         expect(changeDurationResultMonthly).toBe('monthly');
        
//     });
// });

describe('actions', () => {
    it('should create an action for fetching salesPerfData', () => {
        const action = Creators.fetchSalesPerf();
        const expectedResult = {
           type: Types.FETCH_SALES_PERF
        };
       expect(action).toEqual(expectedResult)
    });
    it('should create an action for salesPerfSuccess', () => {
        const action = Creators.salesPerfSuccess();
        const expectedResult = {
           type: Types.SALES_PERF_SUCCESS
        };
       expect(action).toEqual(expectedResult)
    });
    it('should create an action for salesPerfError', () => {
        const action = Creators.salesPerfError();
        const expectedResult = {
           type: Types.SALES_PERF_ERROR
        };
       expect(action).toEqual(expectedResult)
    });
});

describe('epics', () => {
    it('generate fetch sales api response as desired', () => {
        // Return observable of { type: FETCH_CALLS }
        
        const action$: ActionsObservable<FluxStandardAction> = ActionsObservable.of<FluxStandardAction>(Creators.fetchSalesPerf()); 
        const state$: StateObservable<any> = <StateObservable<any>>of({});
        const dependencies: Dependencies = {
            getJSON: (url) => of(apiMock)
        };
        const expectedResult: FluxStandardAction = Creators.salesPerfSuccess(apiMock); // Returns { type: FETCH_SALES_SUCCESS, salesPerfData: apiMock}
        const $obs: Observable<any> = fetchSalesEpic(action$, state$, dependencies).pipe(
            toArray()
        );

        $obs.subscribe(actions => {
            expect(actions).toEqual(expectedResult);
        });
    });

    // Error block when error API contract is defined
});

describe('reducers', () => {
    it('should fetch salesPerfDataSuccess method', () => {
        const result = salesPerfSuccess(INITIAL_STATE, Creators.salesPerfSuccess(apiMock));
        const expectedResult = {
           ...INITIAL_STATE,
            data: apiMock
       }
       expect(result).toEqual(expectedResult);
    });
    it('should fetch salesPerfDataError method', () => {
        const errorMock  = { status: 404, error: ['something wrong happened']}
        const result = salesPerfError(INITIAL_STATE, Creators.salesPerfError(errorMock));
        const expectedResult = {
           ...INITIAL_STATE,
            error: errorMock
       }
       expect(result).toEqual(expectedResult);
    });
});