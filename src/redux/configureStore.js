import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import rockets from './rockets/rocket';
import { missions } from './missions/mission';
import dragons from './dragons/dragon';
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
