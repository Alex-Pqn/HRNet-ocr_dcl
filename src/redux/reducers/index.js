import { combineReducers } from 'redux';
import { getPersistConfig } from 'redux-deep-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import employeeReducers from './employee';

const rootReducer = combineReducers({ employeeReducers });

const persistConfig = getPersistConfig({
  key: 'root',
  storage,
  whitelist: ['employeeReducers'],
  rootReducer,
});

export default persistReducer(persistConfig, rootReducer);
