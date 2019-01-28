/* global window */
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { reducers, persistedReducers } from '../reducers';

// Init Redux Store (and apply middleware)
export function initializeStore(initialState = {}, usePersisted = false) {
  // Allows us to use devtools when installed (browser extension)
  const composeEnhancer = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    usePersisted ? persistedReducers() : reducers(),
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
  );
}

// Init Redux Persist
export const store = initializeStore({}, true);
export const persistor = persistStore(store, undefined, () => { store.getState(); });
