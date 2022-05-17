import apiConnection from './apiConnection';

// get a list of missions
const getAllMissions = () => apiConnection.get(`/missions`);

const ApiServices = {
  getAllMissions,
};
export default ApiServices;
