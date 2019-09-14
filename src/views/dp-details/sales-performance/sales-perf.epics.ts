import { of,  } from "rxjs";
// import { ajax } from 'rxjs/ajax';

import { mergeMap, catchError, map, tap} from 'rxjs/operators';
import { FluxStandardAction, Dependencies } from '../../../global.typings';
import { ofType, Epic } from "redux-observable";
import { Types, Creators } from './sales-perf.reducers';
import { APIInterface } from './sales-perf.typings';

export const fetchSalesEpic: Epic<FluxStandardAction, FluxStandardAction, any, Dependencies> = (action$, state$, { getJSON }) => {
    // const config = {
    //     xAxis: {
    //         categories: ['Sep', 'Oct', 'Nov', 'Dec']
    //     },
    //     yAxis: {
    //         min: 0,
    //         title: {
    //             text: 'Total Sales'
    //         },
    //         units: [[
    //             'currency',
    //             [1, 20, 30]
    //         ]]
    //     },
    //     series: [{
    //         name: 'Motor',
    //         data: [2000000, 3000000, 4000000, 7000000]
    //     }, {
    //         name: 'Health',
    //         data: [2500000, 2500000, 3000000, 2000000]
    //     }, {
    //         name: 'Life',
    //         data: [3000000, 4000000, 4000000, 2000000]
    //     }]
    // };
    return action$.pipe(
        ofType(Types.FETCH_SALES_PERF),
        // tap(console.log),
        mergeMap((action) => { 
            const url = `http://52.66.241.59:8888/v1/sales_detail/?pivot_date=20-11-2018&period=${action.payload.period}&current=${action.payload.current}`;
            // const headers = {
                
            // };
            // return ajax({
            //     url, headers
            // })
            return getJSON(url)
            .pipe(
                map((response: APIInterface) => {
                    if(response.status === 200){
                        return Creators.salesPerfSuccess(response.data)
                    } else {
                        return Creators.salesPerfError(response);
                    }
                }),
                catchError(error => of(Creators.salesPerfError(error)))
            )
        })
    )
};
