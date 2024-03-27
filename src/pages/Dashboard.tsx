import React from 'react';
import { ICardProps } from '../models/cards';
import { DASHBOARDCARDS } from '../assests/data/dashboard-cards';
import DashboardCard from '../components/dashboard/Cards';

const Dashboard = () => {
  const dashboardCards: ICardProps[] = DASHBOARDCARDS;
  return (
    <main className='p-5'>
      <div className='topCardContainer flex'>
        {dashboardCards.map((card, index) => (
          <div className='singleCardContainer flex-1' key={index}>
            <DashboardCard {...card} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
