import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/mission';

const Mission = (props) => {
  const {
    id, name, description, classType, status, reserved,
  } = props;
  const dispatch = useDispatch();
  const handleJoinMission = (event) => {
    dispatch(joinMission(event.target.id));
  };
  return (
    <section className="missionRow">
      <section className={classType}>
        <div className="mission cell">
          <p>{name}</p>
        </div>
        <div className="missionDescription cell">
          <p>{description}</p>
        </div>
        <div className="missionStatus cell">
          <p>{status}</p>
        </div>
        <div className="missionButton cell">
          <input id={id} type="submit" value={reserved ? 'Leave Mission' : 'Join Mission'} onClick={handleJoinMission} />
        </div>
      </section>
    </section>
  );
};
Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Mission;
