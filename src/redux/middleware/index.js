import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = [thunk, logger];

export default middleware;
