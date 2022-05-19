import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const [profileSections] = useState([
    'Rockets', 'Missions', 'Dragons',
  ]);

  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  const dragons = useSelector((state) => state.dragons);

  const joinedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const joinedDragons = dragons.filter((dragon) => dragon.reserved === true);

  return (
    <section className="profileContainer">
      {profileSections.map((profileSection) => (
        <div key={profileSection} className={`${profileSection.toLowerCase()}profile`}>
          <p className="">
            My
            {`${' '}`}
            {profileSection}
          </p>
          {profileSection === profileSections[0] && (
            <section>
              {joinedRockets.map((rocket) => (
                <div key={rocket.id}>
                  <p>{rocket.rocket_name}</p>
                </div>
              ))}
            </section>
          )}
          {profileSection === profileSections[1] && (
            <section>
              {joinedMissions.map((mission) => (
                <div key={mission.mission_id}>
                  <p>{mission.mission_name}</p>
                </div>
              ))}
            </section>
          )}
          {profileSection === profileSections[2] && (
            <section>
              {joinedDragons.map((dragon) => (
                <div key={dragon}>
                  <p>{dragon}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      ))}
    </section>
  );
};
export default MyProfile;
