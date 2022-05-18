import { useSelector } from 'react-redux';
import React from 'react';
import Mission from './Mission';

const Missions = () => {
  const missionsCollection = useSelector((state) => state.missions);
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
          <p>   </p>
        </div>
      </section>
      {
        missionsCollection.map((mission) => {
          alternative = !alternative;
          return (
            <div key={mission.mission_name}>
              <Mission
                id={mission.mission_id}
                name={mission.mission_name}
                description={mission.description}
                classType={(alternative) ? 'normal' : 'alternative'}
                status="NOT A MEMBER"
              />
            </div>
          );
        })
      }
    </section>

  );
};
export default Missions;
