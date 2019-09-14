import { FluxStandardActionCreator } from "../../../global.typings";

export const ADD_CALL = "ADD_CALL";
export const ADD_CALL_SUCCESS = "ADD_CALL_SUCCESS";
export const ADD_CALL_FAILURE = "ADD_CALL_FAILURE";
export const FETCH_CALLS = "FETCH_CALLS";
export const FETCH_CALLS_SUCCESS = "FETCH_CALLS_SUCCESS";
export const FETCH_CALLS_FAILURE = "FETCH_CALLS_FAILURE";

export const fetchCalls: FluxStandardActionCreator = () => ({ type: FETCH_CALLS })
export const fetchCallsSuccess: FluxStandardActionCreator = (payload: any) => ({ type: FETCH_CALLS_SUCCESS, payload })
export const fetchCallsError: FluxStandardActionCreator = (payload: any) => ({ type: FETCH_CALLS_FAILURE, error: payload })
export const addCall: FluxStandardActionCreator = (payload: string[]) => ({ type: ADD_CALL, payload })
export const addCallSuccess: FluxStandardActionCreator = (payload: any) => ({ type: ADD_CALL_SUCCESS, payload })
export const addCallError: FluxStandardActionCreator = (payload: any) => ({ type: ADD_CALL_FAILURE, error: payload })
