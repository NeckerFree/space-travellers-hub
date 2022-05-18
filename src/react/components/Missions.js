import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
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
