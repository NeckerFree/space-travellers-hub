import showConnectionError from '../shared/error';
import * as API from '../shared/api';

// actions
const RECEIVE_DRAGONS = 'spacetraveler/dragons/RECEIVE_DRAGONS';
const JOIN_DRAGON = 'spacetraveler/mission/JOIN_DRAGON';

// reducer
export default function dragons(state = [], action) {
  switch (action.type) {
    case RECEIVE_DRAGONS:
      return action.dragons;
    case JOIN_DRAGON:
      return state.map((dragon) => {
        if (dragon.id !== action.id) {
          return dragon;
        }
        return { ...dragon, reserved: !dragon.reserved };
      });
    default:
      return state;
  }
}

// action creators
function receiveDragons(dragons) {
  return {
    type: RECEIVE_DRAGONS,
    dragons,
  };
}

export function joinDragon(id) {
  return {
    type: JOIN_DRAGON,
    id,
  };
}

// Thunk action creators
export function handleJoinDragon(id) {
  return (dispatch) => {
    dispatch(joinDragon(id));
  };
}

export function handleReceiveDragons(dragons) {
  return (dispatch) => API.getAllDragons(dragons)
    .then((dragons) => {
      const reserved = { reserved: false };
      const modifiedDragons = dragons.map((dragon) => {
        const modifiedDragon = { ...dragon, ...reserved };
        return modifiedDragon;
      });

      dispatch(receiveDragons(modifiedDragons));
    })
    .catch(() => {
      showConnectionError();
    });
}
