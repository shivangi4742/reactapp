import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Tabstyle } from './tab.styles';
import Tabs from '@material-ui/core/Tabs';

export const useTab = (activeTab: number) => {
    const [tabIndex, setTab] = React.useState(activeTab);
    const handleChange = React.useCallback(
        (e, value) => {
            setTab(value);
        },
        [tabIndex]
    );
    return [tabIndex, handleChange];
}

const TmTab = ({ activeTab, handler, tabs }) => {

    const [tabIndex, handleTabChange] = useTab(0);
    return (
        <Paper >
            <Tabs
                value={activeTab}
                onChange={handler}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {tabs.map((tab, idx) => <Tabstyle key={idx} label={tab} />)}
            </Tabs>
        </Paper>
    );
}

/* TmTab.defaultProps = {
    activeTab: 0,
    handler: () => {},
    tabs: []
} */

export default TmTab;