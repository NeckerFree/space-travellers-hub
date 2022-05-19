import showConnectionError from '../shared/error';
import * as API from '../shared/api';

// actions
const RECEIVE_MISSIONS = 'spacetraveler/missions/RECEIVE_MISSIONS';
const JOIN_MISSION = 'spacetraveler/mission/JOIN_MISSION';

// reducer
export default function missions(state = [], action) {
  switch (action.type) {
    case RECEIVE_MISSIONS:
      return action.missions;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });
    default:
      return state;
  }
}

// action creators
function receiveMissions(missions) {
  return {
    type: RECEIVE_MISSIONS,
    missions,
  };
}

function joinMission(id) {
  return {
    type: JOIN_MISSION,
    id,
  };
}

// Thunk action creators
export function handleJoinMission(id) {
  return (dispatch) => {
    dispatch(joinMission(id));
  };
}

export function handleReceiveMissions(missions) {
  return (dispatch) => API.getAllMissions(missions)
    .then((missions) => {
      const reserved = { reserved: false };
      const modifiedMissions = missions.map((mission) => {
        const modifiedMission = { ...mission, ...reserved };
        return modifiedMission;
      });

      dispatch(receiveMissions(modifiedMissions));
    })
    .catch(() => {
      showConnectionError();
    });
}
