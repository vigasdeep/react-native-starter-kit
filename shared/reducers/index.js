import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import posts from './posts';
import rehydrated from './rehydrated';

// Add each of the reducers
const allReducers = {
  posts,
  rehydrated,
};

// Setup redux persist config
const persistConfig = {
  blacklist: [],
  key: 'root',
  storage,
};

const reducers = () => combineReducers(persistConfig, allReducers);
const persistedReducers = () => persistCombineReducers(persistConfig, allReducers);

export { persistedReducers, reducers };
