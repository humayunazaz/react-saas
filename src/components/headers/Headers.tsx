import React from 'react';
import DropdownLogout from './Dropdown';

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between p-4 bg-gray-300'>
      <h1 className='text-xl font-bold'>Current Page Title</h1>
      <DropdownLogout />
    </header>
  );
};

export default Header;
