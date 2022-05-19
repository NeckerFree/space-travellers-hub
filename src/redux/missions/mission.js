import RECEIVE_DATA from '../shared/actions';

const JOIN_MISSION = 'spacetraveler/mission/JOIN_MISSION';
const missions = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DATA:
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
};

const joinMission = (id) => ({ type: JOIN_MISSION, id });

export { missions, joinMission };
