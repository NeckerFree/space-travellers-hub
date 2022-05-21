import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { handleReceiveMissions } from '../../redux/missions/mission';

const Missions = () => {
  const missionsCollection = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionsCollection.length === 0) {
      dispatch(handleReceiveMissions());
    }
  }, [missionsCollection]);

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
        missionsCollection.map((mission) => {
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
