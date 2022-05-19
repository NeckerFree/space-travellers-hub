import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Dragon from './Dragon';
import { handleReceiveDragons } from '../../redux/dragons/dragon';

const Dragons = () => {
  const state = useSelector((state) => state);
  const dragonsCollection = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dragonsCollection.length === 0) {
      dispatch(handleReceiveDragons());
    }
  }, [dragonsCollection]);

  const { loading } = state;
  if (loading === true) {
    return (
      <div className="loading">
        <div className="loader"><CircularProgress /></div>
      </div>
    );
  }

  let alternative = true;

  return (
    <section className="missionsContainer" data-testid="missions-a">
      <section className="missionHeader">
        <div className="mission cell">
          <p>Dragon</p>
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
      {dragonsCollection.map((dragon) => {
        alternative = !alternative;
        return (
          <div key={dragon.name}>
            <Dragon
              id={dragon.id}
              name={dragon.name}
              description={dragon.description}
              classType={(alternative) ? 'normal' : 'alternative'}
              status={(dragon.reserved) ? 'Active Member' : 'NOT A MEMBER'}
              reserved={dragon.reserved}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Dragons;
