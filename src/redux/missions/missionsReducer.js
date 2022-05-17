import { ADD_MISSION, GET_MISSIONS, REMOVE_MISSION } from './missionTypes';

const missionsCollection = [];
export default function missionsReducer(state = missionsCollection, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MISSIONS:
      return payload;
    case ADD_MISSION: {
      return [...state, payload];
    }
    case REMOVE_MISSION: {
      const index = state.findIndex((mission) => mission.id === payload);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
}
