import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/Main-Navigation';

const RootPage = () => {
  return (
    <main>
      <MainNavigation />

      <Outlet />
    </main>
  );
};

export default RootPage;
