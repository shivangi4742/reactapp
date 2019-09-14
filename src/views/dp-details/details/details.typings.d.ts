import { ReactNode } from "react";

export type CallHistoryProps = {
    header: ReactNode | string,
    children: ReactNode
}
export interface Call {
    id: number;
    remarks: string[];
    datetime: Date;
    entered_by: string
}
export type CallList = Call[]
// export type State = {
//     callsList: CallList,
//     callsListError: any,
//     addCallError: any,
    
// }
export type Remarks = string [];
// export type actionType = {
//     type: string,
//     remarks?: string []
//     callsList?: CallList,
//     callsListError?: {},
//     addCallError ?: {},
//     addCallSuccess ?: {}
// }
