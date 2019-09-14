import getInjectors from './reducer-injectors';
import { store } from '../index';

export default function useInjectReducer ( key, reducer ) {
    const { injectReducer } = getInjectors(store);
    injectReducer(key, reducer);
}