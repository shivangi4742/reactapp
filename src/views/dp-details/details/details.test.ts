import React from 'react';
import callsReducer from './details.reducer';
import { addCall, ADD_CALL, FETCH_CALLS, fetchCalls, fetchCallsSuccess, addCallSuccess, FETCH_CALLS_SUCCESS, FETCH_CALLS_FAILURE, ADD_CALL_SUCCESS } from './details.actions';
import { addCallEpic, fetchCallsEpic } from './details.epics';
import apiMock from './details.mocks.json';
import { of, Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';
// import { initialState } from './reducer';
import {  ActionsObservable, StateObservable } from 'redux-observable';
import { FluxStandardAction, Dependencies } from '../../../global.typings';
import { Remarks } from './details.typings';
// import counter from '../../utils/counter';
import { Call } from './details.typings';

let id = 0;
const counter = () => ++id;


describe('actions', () => {
    it('should create an action object for add call', () => {
        const remarks: Remarks = ['Remark 2'];
        const expectedResult: FluxStandardAction = {
            type: ADD_CALL,
            payload: remarks
        }
        expect(addCall(remarks)).toEqual(expectedResult);
    });
    it('should create an action object for fetch calls', () => {
        const expectedResult: FluxStandardAction = {
            type: FETCH_CALLS
        }
        expect(fetchCalls()).toEqual(expectedResult);
    });
    it('should create an action object for fetch calls success', () => {
        const expectedResult: FluxStandardAction = {
            type: FETCH_CALLS_SUCCESS,
            payload: apiMock
        }
        expect(fetchCallsSuccess(apiMock)).toEqual(expectedResult);
    });
    
    it('should create an action object for add calls success', () => {
        const remarks: Remarks = ['Remark 2'];
        const expectedResult: FluxStandardAction = {
            type: ADD_CALL_SUCCESS,
            payload: remarks
        }
        expect(addCallSuccess(remarks)).toEqual(expectedResult);
    });
    
})
describe('epics', () => {
    it('generate fetch Calls api response as desired', () => {
        // Return observable of { type: FETCH_CALLS }
        const action$: ActionsObservable<FluxStandardAction> = ActionsObservable.of<FluxStandardAction>(fetchCalls()); 
        const state$: StateObservable<any> = <StateObservable<any>>of({});
        const dependencies: Dependencies = {
            getJSON: (url) => of(apiMock)
        };
        const expectedResult: FluxStandardAction = fetchCallsSuccess(apiMock); // Returns { type: FETCH_CALLS_SUCCESS, callsList: apiMock}
        const $obs: Observable<any> = fetchCallsEpic(action$, state$, dependencies).pipe(
            toArray()
        );

        $obs.subscribe(actions => {
            expect(actions).toEqual(expectedResult);
        });
    });
    it('adds a new call to list of calls', () => {
        const remarks = ['New Remark 1', 'New Remark 2'];
        const action$: ActionsObservable<FluxStandardAction> = ActionsObservable.of<FluxStandardAction>(addCall(remarks)); // Return observable of { type: ADD_CALL, payload }
        const state$: StateObservable<any> = <StateObservable<any>>of({});
        const dependencies: Dependencies = {
            getJSON: (url) => of(apiMock)
        };
        const expectedResult: FluxStandardAction = addCallSuccess(remarks); // Returns { type: FETCH_CALLS_SUCCESS, callsList: apiMock}
        const $obs: Observable<any> = addCallEpic(action$, state$, dependencies).pipe(
            toArray()
        );
       
        $obs.subscribe(action$ => {
            expect(action$).toEqual(expectedResult);
        });
    })
})
describe('reducers', () => {
    it('it should add new call to list of calls', () => {
        const action = {
            type: ADD_CALL_SUCCESS,
            payload: ['Remarks 1']
        }
        const call = callsReducer({}, action);
    
        function isCall(value: Call): value is Call {
            let exists = true;
            const obj = (<Call>value);
            for (let key in obj){
                if(obj[key] === undefined ) {
                    exists = false
                }
            }
            return exists;
        }
        const callIsObject = typeof call == 'object' && call instanceof Object && !(call instanceof Array)
        expect(callIsObject && isCall(call)).toBe(true);
    });
})