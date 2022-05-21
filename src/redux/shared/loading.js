// actions
const RECEIVE_ROCKETS = 'spacetraveler/rocket/RECEIVE_ROCKETS';
const RECEIVE_MISSIONS = 'spacetraveler/missions/RECEIVE_MISSIONS';
const RECEIVE_DRAGONS = 'spacetraveler/dragons/RECEIVE_DRAGONS';

// reducer
export default function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_ROCKETS:
      return false;
    case RECEIVE_MISSIONS:
      return false;
    case RECEIVE_DRAGONS:
      return false;
    default:
      return state;
  }
}
