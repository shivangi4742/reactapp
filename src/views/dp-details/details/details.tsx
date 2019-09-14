import { useState, useEffect, useCallback } from "react";
// import { Card } from 'antd';
import Card from '@material-ui/core/Card';

import CallsHistory from "./calls-history";
import PanelHeader from './panel-header';
import CallsListHeader from './calls-list-header';
import CallsList from "./calls-list";
import { useMappedState } from 'redux-react-hook';

const CallsHistoryHOC = ({ match } ) => {

    const [month, setMonth] = useState("last1");
    // CallsList store state  

    const mapState = useCallback(
        state => ({
            callsList: state.callsReducer.callsList
        }),
        []
    );
    let { callsList: callListUnfiltered }  = useMappedState(mapState);
    const [callFilter, setCallFilter] = useState(null);
    let callsList = callFilter == null ? callListUnfiltered : callListUnfiltered.filter(call => call.datetime >= callFilter);
    
    // Select filter handler
    const handleChange = (period: string) => {
        // filter list based on month selected
        let dateFrom: Date = new Date();
        switch (period){
            case 'last2': {
                dateFrom.setDate(dateFrom.getDate() + 1);
                break;
            }
            case 'last3': {
                dateFrom.setDate(dateFrom.getDate() - 90);
                break;
            }
            case 'last6': {
                dateFrom.setDate(dateFrom.getDate() - 180);
                break;
            }
            default:
                dateFrom.setDate(dateFrom.getDate() - 30);
                break;
        }
        setCallFilter(dateFrom);
        setMonth(period);
        // setIsListUpdated(isListUpdated);
    }
    
    // Add remarks Modal
    const [showModal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!showModal);
    }

    return (
        <CallsHistory header={<PanelHeader month={month} handler={handleChange} />}>
            <h2>Welcome {match.params.id}</h2>
            {/* <Card title={<CallsListHeader showModal={showModal} handler={toggleModal} />} headStyle={callsHistoryCardHeadStyles} bodyStyle={callsHistoryCardBodyStyles} hoverable={true}>
                <CallsList list={callsList} />
            </Card> */}
        </CallsHistory>
    )
}
export default CallsHistoryHOC;