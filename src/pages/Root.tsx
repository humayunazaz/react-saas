import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';

const RootPage = () => {
  return (
    <main className='flex flex-col md:flex-row min-h-screen'>
      <aside>
        <SideNavigation />
      </aside>

      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default RootPage;
