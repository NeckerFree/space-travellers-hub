import showConnectionError from '../shared/error';
import * as API from '../shared/api';

// actions
const RECEIVE_DRAGONS = 'spacetraveler/dragons/RECEIVE_DRAGONS';

// reducer
export default function dragons(state = [], action) {
  switch (action.type) {
    case RECEIVE_DRAGONS:
      return action.dragons;
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

// Thunk action creators
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
