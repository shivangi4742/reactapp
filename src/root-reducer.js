import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router';
import languageProviderReducer from './containers/language-provider/lang-provider.reducer';
import history from './utils/history';

export default function createRootReducer(asyncReducers = {}){
 
    const rootReducer = combineReducers({
        language: languageProviderReducer,
        router: connectRouter(history),
        ...asyncReducers
    });

    return rootReducer;
}