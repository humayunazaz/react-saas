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

      <section className='flex-grow'>
        <Header />
        <Outlet />
      </section>
    </main>
  );
};

export default RootPage;
