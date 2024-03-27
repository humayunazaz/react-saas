import React, { useState } from 'react';
import { removeAuthToken } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

function DropdownLogout() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = () => {
    removeAuthToken();
    navigate('/login');
  };

  return (
    <div className='relative inline-block text-left'>
      <div className='flex -space-x-2 overflow-hidden'>
        <img
          className='inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer'
          src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
          onClick={toggleDropdown}
        />
      </div>

      {/* Dropdown panel, show/hide based on dropdown state. */}
      {isOpen && (
        <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='p-3' role='none'>
            <button onClick={logoutHandler}>Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownLogout;
