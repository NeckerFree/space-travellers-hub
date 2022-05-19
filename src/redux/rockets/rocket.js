import showConnectionError from '../shared/error';
import * as API from '../shared/api';

// actions
const RESERVE_ROCKET = 'spacetraveler/rocket/RESERVE_ROCKET';
const RECEIVE_ROCKETS = 'spacetraveler/rocket/RECEIVE_ROCKETS';

// reducer
export default function rockets(state = [], action) {
  switch (action.type) {
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    case RECEIVE_ROCKETS:
      return action.rockets;
    default:
      return state;
  }
}

// action creators
export function reserveRocket(id) {
  return {
    type: RESERVE_ROCKET,
    id,
  };
}
function receiveRockets(rockets) {
  return {
    type: RECEIVE_ROCKETS,
    rockets,
  };
}

// Thunk action creators
export function handleReserveRocket(rocket) {
  return (dispatch) => {
    dispatch(reserveRocket(rocket.id));
  };
}

export function handleReceiveRockets(rockets) {
  return (dispatch) => API.getAllRockets(rockets)
    .then((rockets) => {
      const reserved = { reserved: false };
      const modifiedRockets = rockets.map((rocket) => {
        const modifiedRocket = { ...rocket, ...reserved };
        return modifiedRocket;
      });

      dispatch(receiveRockets(modifiedRockets));
    })
    .catch(() => {
      showConnectionError();
    });
}
