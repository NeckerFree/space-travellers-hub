import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { handleReceiveMissions } from '../../redux/missions/mission';

const Missions = () => {
  const state = useSelector((state) => state);
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(handleReceiveMissions());
    }
  }, [missions]);

  const { loading } = state;
  if (loading === true) {
    return (
      <div className="loading">
        <div className="loader"><CircularProgress /></div>
      </div>
    );
  }

  return (
    <div className="missions appwidth" data-testid="missions-a">
      <div className="missionss">
        {missions.map((mission) => (
          <div key={mission.mission_id}>{mission.mission_name}</div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
