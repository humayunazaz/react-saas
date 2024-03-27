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
    <div className={`bg-gray-800 text-white h-screen ${isCollapsed ? 'w-16' : 'w-64'} relative`}>
      {isCollapsed && (
        <div className='openActionContainer absolute top-0 right-[-34px] bg-gray-800'>
          <button className='p-2 text-white text-xs' onClick={toggleCollapse}>
            <IconWrapper iconName='close' />
          </button>
        </div>
      )}
      {!isCollapsed && (
        <div className='openActionContainer text-right'>
          <button className='p-2 text-white text-sm' onClick={toggleCollapse}>
            <IconWrapper iconName='menu' />
          </button>
        </div>
      )}
      <div className='itemsContainer pt-10'>
        {!isCollapsed && (
          <nav className='flex flex-col'>
            {NavItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `p-4 hover:bg-gray-700 flex items-center bg-gray-700` : `p-4 hover:bg-gray-700 flex items-center`
                }
              >
                <IconWrapper iconName={item.icon} />
                <span className='ml-2 text-lg'>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        )}
        {isCollapsed && (
          <div className='flex flex-col'>
            {NavItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `p-4 hover:bg-gray-700 flex items-center bg-gray-700` : `p-4 hover:bg-gray-700 flex items-center`
                }
              >
                <IconWrapper iconName={item.icon} />
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNavigation;
