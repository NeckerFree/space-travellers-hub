import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../assets/stylesheets/App.css';
import Navigation from './Navigation';
import ConnectedRockets from './Rockets';
import ConnectedMissions from './Missions';
import ConnectedDragons from './Dragons';
import MyProfile from './MyProfile';
import { handleReceiveRockets } from '../../redux/rockets/rocket';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleReceiveRockets());
  }, []);

  return (
    <div className="app" data-testid="app-1">
      <div className="header white">
        <Navigation />
      </div>

      <div className="main">
        <Routes>
          <Route exact path="/" element={<ConnectedRockets />} />
          <Route path="missions" element={<ConnectedMissions />} />
          <Route path="dragons" element={<ConnectedDragons />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
