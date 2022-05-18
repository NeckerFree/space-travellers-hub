import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import rockets from './rockets/rockets';
import missions from './missions/missions';
import dragons from './dragons/dragons';
import loading from './shared/loading';
import middleware from './middleware';

const rootReducer = combineReducers({
  rockets,
  missions,
  dragons,
  loading,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
