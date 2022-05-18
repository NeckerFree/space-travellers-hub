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
      const reserved = { reserved: false };
      const modifiedRockets = rockets.map((rocket) => {
        const modifiedRocket = { ...rocket, ...reserved };
        return modifiedRocket;
      });
      dispatch(receiveData(modifiedRockets, missions, dragons));
    })
    .catch(() => {
      showConnectionError();
    });
}

export default handleInitialData;
