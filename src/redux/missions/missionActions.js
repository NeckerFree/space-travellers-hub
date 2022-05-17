import { v4 as uniqueID } from 'uuid';
import { ADD_MISSION, GET_MISSIONS, REMOVE_MISSION } from './missionTypes';
import ApiServices from '../../dataAccess/apiServices';

mission_name
description
export const createMission = (mission_name, description) => async (dispatch) => {
  const missionId = uniqueID();
  const missionCreate = {
    mission_id: missionId,
    mission_name,
    description,
  };
  const mission = {
    id: missionId,
    name : mission_name,
    description,
  };
  await ApiServices.createMission(missionCreate);
  dispatch({
    type: ADD_MISSION,
    payload: mission,
  });
};

export const getAllMissions = () => async (dispatch) => {
  const response = await ApiServices.getAllMissions();
  const missions = [];
  const entries = Object.entries(response.data);
  entries.forEach((inputEntry) => {
    const mission = Object.assign({ id: inputEntry[0] }, ...inputEntry[1]);
    missions.push(mission);
  });
  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
};

export const removeMission = (id) => async (dispatch) => {
  await ApiServices.removeMission(id);
  dispatch({
    type: REMOVE_MISSION,
    payload: id,
  });
};
