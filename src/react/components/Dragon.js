import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleJoinDragon } from '../../redux/dragons/dragon';

const Dragon = (props) => {
  const {
    id, name, description, classType, status, reserved,
  } = props;

  const dispatch = useDispatch();

  const joinDragon = (event) => {
    dispatch(handleJoinDragon(event.target.id));
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
            value={reserved ? 'Leave Dragon' : 'Join Dragon'}
            className={reserved ? 'mission-reserve-button-true' : 'mission-reserve-button'}
            onClick={joinDragon}
          />
        </div>
      </section>
    </section>
  );
};

Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Dragon;
