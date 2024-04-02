import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';
import Header from '../components/headers/Headers';

const RootPage = () => {
  return (
    <main className='flex flex-col md:flex-row min-h-screen'>
      <aside>
        <SideNavigation />
      </aside>

      <section className='overflow-y-auto h-screen flex-1'>
        <Header />
        <Outlet />
      </section>
    </main>
  );
};

export default RootPage;
