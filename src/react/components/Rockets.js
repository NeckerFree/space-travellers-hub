import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleReserveRocket } from '../../redux/rockets/rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const reserve = (rocket) => {
    dispatch(handleReserveRocket(rocket));
  };

  return (
    <div className="rockets appwidth" data-testid="rockets-a">
      <div className="rocketss">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocket">
            <div className="rocket-thumbnail">
              <img src={rocket.flickr_images} alt="" className="rocket-img" />
            </div>
            <div className="rocket-info">
              <div className="rocket-name">{rocket.rocket_name}</div>
              <div className="rocket-description">
                {rocket.reserved && (
                  <span className="reserved-label">Reserved</span>
                )}
                {rocket.description}
              </div>
              <button
                type="button"
                className={rocket.reserved ? 'rocket-reserve-button-true' : 'rocket-reserve-button'}
                onClick={(e) => {
                  e.preventDefault();
                  reserve(rocket);
                }}
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve rocket'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
