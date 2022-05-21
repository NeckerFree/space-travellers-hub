import axios from 'axios';

const rocketsapi = 'https://api.spacexdata.com/v3/rockets';
const missionsapi = 'https://api.spacexdata.com/v3/missions';
const dragonsapi = 'https://api.spacexdata.com/v3/dragons';

export const getAllRockets = () => axios.get(rocketsapi)
  .then((response) => response.data);

export const getAllMissions = () => axios.get(missionsapi)
  .then((response) => response.data);

export const getAllDragons = () => axios.get(dragonsapi)
  .then((response) => response.data);
