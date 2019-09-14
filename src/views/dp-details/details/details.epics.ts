import { of } from "rxjs";
import { mergeMap, catchError, map } from 'rxjs/operators';
import { FluxStandardAction, Dependencies} from '../../../global.typings';
import { ofType, Epic } from "redux-observable";
import { ADD_CALL, FETCH_CALLS, fetchCallsSuccess, fetchCallsError, addCallError, addCallSuccess } from "./details.actions";



export const fetchCallsEpic: Epic<FluxStandardAction, FluxStandardAction, any, Dependencies> = (action$, state$, { getJSON }) => action$.pipe(
    ofType(FETCH_CALLS),
    mergeMap(() => getJSON('https://swapi.co/api/people')
        .pipe(
            map(response => fetchCallsSuccess(response)),
            catchError(error => of(fetchCallsError(error)))
        ))
    // mergeMap(() => fetch('https://swapi.co/api/people')
    //     .then(response => response.ok ? response.json(): fetchCallsError(response))
    //     .then(result => result.type === FETCH_CALLS_FAILURE ? result : fetchCallsSuccess(result))
    //     .catch(err => of(fetchCallsError(err)))
    // )
    // .catchError(error => of(fetchCallsError(error)))
);


export const addCallEpic: Epic<FluxStandardAction, FluxStandardAction, any, Dependencies> = (action$, state$, { getJSON }) => action$.pipe(
    ofType(ADD_CALL),
    mergeMap(({ payload }) => getJSON('https://swapi.co/api/people')
        .pipe(
            map(() => addCallSuccess(payload)),
            catchError(error => of(addCallError(error)))
        )
    )
);
