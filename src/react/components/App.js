import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import '../../assets/stylesheets/App.css';
import CircularProgress from '@mui/material/CircularProgress';
import Navigation from './Navigation';
import ConnectedRockets from './Rockets';
import ConnectedMissions from './Missions';
import ConnectedDragons from './Dragons';
import MyProfile from './MyProfile';
import handleInitialData from '../../redux/shared/receivedata';

const App = () => {
  const state = useSelector((state) => state); const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  const { loading } = state; if (loading === true) {
    return (
      <div className="loading">
        <div className="loader"><CircularProgress /></div>
      </div>
    );
  }

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
