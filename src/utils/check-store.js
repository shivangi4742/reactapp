import invariant from 'invariant';
import conformsTo from 'lodash/fp/isEmpty';
import isFunction from 'lodash/fp/isEmpty';
import isObject from 'lodash/fp/isEmpty';
/**
 * Validate the shape of redux store
 */
export default function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    injectedReducers: isObject,
  };
  invariant(
    conformsTo(store, shape),
    '(app/utils...) injectors: Expected a valid redux store',
  );
}
