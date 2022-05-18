import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
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
              <div className="rocket-description">{rocket.description}</div>
              <button type="button" className="rocket-reserve-button">Reserve Rocket</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
// {rocket.reserved && ()}
