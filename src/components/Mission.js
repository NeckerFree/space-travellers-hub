import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import { useDispatch } from 'react-redux';
import { removeMission } from '../redux/missions/missionActions';

const Mission = (props) => {
  const {
    id, name, description, classType, status, } = props;
  const dispatch = useDispatch();
  const foo = () => true;
  const handleRemoveMission = (event) => {
    dispatch(removeMission(event.target.id));
  };
  return (
    <section className="missionRow">
      <section className={classType}>
        <div className="mission">
          <p>{name}</p>
        </div>
        <div className="missionDescription">
          <p>{description}</p>
        </div>
        <div className="missionStatus">
          <p>{status}</p>
        </div>
        <div className="missionButton">
          <input id="submit" type="submit" value="Join Mission" />
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
};
export default Mission;
