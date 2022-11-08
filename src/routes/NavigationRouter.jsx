import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

const NavigationRouter = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="login" />
    </Routes>
  );
};

export default NavigationRouter;
