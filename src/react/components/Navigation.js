import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/planet.png';

const Navigation = () => {
  const [navContent] = useState({
    logotext: 'Space Travelers\' Hub',
    links: ['Rockets', 'Missions', 'Dragons', 'MyProfile'],
  });

  return (
    <div className="nav appwidth" data-testid="nav-a">
      <div className="logo-group">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-pic" />
        </div>
        <div className="nav-title">{navContent.logotext}</div>
      </div>

      <div className="nav-links">
        {navContent.links.map((link, index) => (
          <NavLink
            key={link}
            to={link === 'Rockets' ? '/' : `/${link}`}
            className="nav-link"
            data-testid={`nav-${index + 1}`}
          >
            {link}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
