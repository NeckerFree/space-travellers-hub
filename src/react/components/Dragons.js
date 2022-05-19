import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { handleReceiveDragons } from '../../redux/dragons/dragon';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(handleReceiveDragons());
    }
  }, [dragons]);

  const { loading } = state;
  if (loading === true) {
    return (
      <div className="loading">
        <div className="loader"><CircularProgress /></div>
      </div>
    );
  }

  return (
    <div className="dragons appwidth" data-testid="dragons-a">
      <div className="dragonss">
        {dragons.map((dragon) => (
          <div key={dragon.id}>{dragon.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Dragons;
