import React from 'react';
import { ICardProps } from '../../models/cards';

const DashboardCard: React.FC<ICardProps> = ({ title, step, status, lastUpdated }) => {
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <h1>Step: {step}</h1>
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>{title}</div>
          <p className='mt-2 text-gray-500'>{lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
