import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { removeAuthToken } from '../utils/auth';
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
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeAuthToken();
    navigate('/login');
  };
  return (
    <nav>
      <ul>
        {NAVIGATIONMENU.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
        <li onClick={logoutHandler}>Logout</li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
