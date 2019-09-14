import counter from '../../../utils/counter';
// import { State } from './typings';
import { FETCH_CALLS_SUCCESS, FETCH_CALLS_FAILURE, ADD_CALL_SUCCESS, ADD_CALL_FAILURE } from './details.actions';
import { FluxStandardAction } from '../../../global.typings';
import { Reducer } from 'redux';

// export const initialState = {
//     callsList: [],
//     callsListError: {},
// }
const callsReducer: Reducer<any> = (state = {}, action: FluxStandardAction): any => {
    switch(action.type){
        case ADD_CALL_SUCCESS: {
            const id = counter();
            const newList = { callsList: [...state.callsList || [], { id, remarks: action.payload, datetime: new Date(), entered_by: 'Kushal'}]};
            return {...state, ...newList};
        }
        case ADD_CALL_FAILURE: {
            return { ...state, addCallError: action.error}
        }
        case FETCH_CALLS_SUCCESS: {
            return { ...state, callsList: action.payload };
        }
        case FETCH_CALLS_FAILURE: {
            return { ...state, callsListError: action.error };
        }
        default: 
            return state;
    }
}



export default callsReducer;
