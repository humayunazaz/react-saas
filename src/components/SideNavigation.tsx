import React, { useState } from 'react';
import { MENUITEMS } from '../assests/data/sideNavigation';
import { NavLink } from 'react-router-dom';
import IconWrapper from './Icon-Wrapper';

const SideNavigation: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const NavItems = MENUITEMS;
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-gray-800 text-white h-screen ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <button className='p-2 text-white' onClick={toggleCollapse}>
        {isCollapsed ? '☰' : '✕'}
      </button>
      {!isCollapsed && (
        <nav className='flex flex-col'>
          {NavItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={`p-4 hover:bg-gray-700 flex items-center ${window.location.pathname === item.path ? 'bg-gray-700' : ''}`}
            >
              <IconWrapper iconName={item.icon} />
              <span className='ml-2'>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
};

export default SideNavigation;
