import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleJoinMission } from '../../redux/missions/mission';

const Mission = (props) => {
  const {
    id, name, description, classType, status, reserved,
  } = props;

  const dispatch = useDispatch();

  const joinMission = (event) => {
    dispatch(handleJoinMission(event.target.id));
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
          <p
            className={reserved ? 'mission-reserve-status-true' : 'mission-reserve-status'}
          >
            {status}
          </p>
        </div>
        <div className="missionButton cell">
          <input
            id={id}
            type="submit"
            value={reserved ? 'Leave Mission' : 'Join Mission'}
            className={reserved ? 'mission-reserve-button-true' : 'mission-reserve-button'}
            onClick={joinMission}
          />
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
