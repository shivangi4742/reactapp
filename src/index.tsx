import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './service-worker';
import { StoreContext } from 'redux-react-hook';
import configureStore from './configure-store';
import { fetchCalls, addCall } from './views/dp-details/details/details.actions';
import theme from './utils/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactHighCharts from './react-highcharts';
// const storeInstance = store();
// storeInstance.dispatch(addCall(['Sample Remark 1', 'Sample Remark 2']));
// storeInstance.dispatch(fetchCalls());
import LanguageProvider from './containers/language-provider/lang-provider';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
// Import i18n messages
import { translationMessages } from './i18n';
import history from './utils/history';

ReactHighCharts();

// ReactDOM.render(
//         <Provider store={store()}>
//             {/* <LanguageProvider> */}
//                 {/* <MuiThemeProvider theme={theme}> */}
//                     {/* <CssBaseline /> */}
//                     <App />
//                 {/* </MuiThemeProvider> */}
//             {/* </LanguageProvider> */}
//         </Provider>,
//     document.getElementById('root')
// );
const initialState = {};

export const store = configureStore(initialState, history);

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <LanguageProvider messages={translationMessages}>
                    <MuiThemeProvider theme={theme}>
                        <CssBaseline />
                        <App />
                    </MuiThemeProvider>
                </LanguageProvider>
            </ConnectedRouter>
        </Provider>
    </StoreContext.Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

