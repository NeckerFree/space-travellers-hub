import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missionsReducer';

const middleWare = applyMiddleware(thunk, logger);
const store = configureStore(
  {
    reducer: { missionsReducer},
    middleWare,
  },
);
export default store;
