import RECEIVE_DATA from './actions';
import * as API from './api';
import showConnectionError from './error';

// action creators
function receiveData(rockets, missions, dragons) {
  return {
    type: RECEIVE_DATA,
    rockets,
    missions,
    dragons,
  };
}

// Thunk action creators
function handleInitialData() {
  return (dispatch) => Promise.all([
    API.getAllRockets(),
    API.getAllMissions(),
    API.getAllDragons(),
  ])
    .then(([rockets, missions, dragons]) => {
      dispatch(receiveData(rockets, missions, dragons));
    })
    .catch(() => {
      showConnectionError();
    });
}

export default handleInitialData;
