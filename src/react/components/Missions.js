import { useSelector } from 'react-redux';
import React from 'react';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  let alternative = true;

  return (
    <section className="missionsContainer" data-testid="missions-a">
      <section className="missionHeader">
        <div className="mission cell">
          <p>Mission</p>
        </div>
        <div className="missionDescription cell">
          <p>Description</p>
        </div>
        <div className="missionStatus cell">
          <p>Status</p>
        </div>
        <div className="missionButton cell">
          <p>Test</p>
        </div>
      </section>
      {
        missions.map((mission) => {
          alternative = !alternative;
          return (
            <div key={mission.mission_name}>
              <Mission
                id={mission.mission_id}
                name={mission.mission_name}
                description={mission.description}
                classType={(alternative) ? 'normal' : 'alternative'}
                status={(mission.reserved) ? 'Active Member' : 'NOT A MEMBER'}
                reserved={mission.reserved}
              />
            </div>
          );
        })
      }
    </section>
  );
};
export default Missions;
