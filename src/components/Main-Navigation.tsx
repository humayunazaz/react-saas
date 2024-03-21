import React from 'react';
import { NavLink } from 'react-router-dom';
const NAVIGATIONMENU: { name: string; path: string }[] = [
  { name: 'Dashboard', path: '/' },
  { name: 'Company Profile', path: 'company-profile' },
  { name: 'Company Information', path: 'company-information' },
  { name: 'Questionnaire', path: 'questionnaire' },
  { name: 'Documents', path: 'documents' },
  { name: 'My Team', path: 'my-team' },
  { name: 'Messages', path: 'messages' },
];
const MainNavigation = () => {
  return (
    <nav>
      <ul>
        {NAVIGATIONMENU.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
