import { useSelector } from 'react-redux';
import React from 'react';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <section className="profileContainer">
      <p>My Missions</p>
      <section className="missionsProfile">
        {
          joinedMissions.map((mission) => (
            <div key={mission.mission_name}>
              <p>{mission.mission_name}</p>
            </div>
          ))
        }
      </section>
    </section>
  );
};
export default MyProfile;
