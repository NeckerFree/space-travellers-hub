import React from 'react';
import { useSelector } from 'react-redux';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons);
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
