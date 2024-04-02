import { ICardProps } from '../../models/cards';

export const DASHBOARDCARDS: ICardProps[] = [
  {
    title: 'Company Profile',
    lastUpdated: 'Last updated 3 mins ago',
    step: 1,
    status: 2,
    route: '/company-profile',
  },
  {
    title: 'Company Information',
    lastUpdated: 'Last updated 3 mins ago',
    step: 2,
    status: 1,
    route: '/company-information',
  },
  {
    title: 'Questionnaire',
    lastUpdated: 'Last updated 3 mins ago',
    step: 3,
    status: 0,
    route: '/questionnaire',
  },
  {
    title: 'Documentations',
    lastUpdated: 'Last updated 3 mins ago',
    step: 4,
    status: 0,
    route: '/documents',
  },
  {
    title: 'My Team',
    lastUpdated: 'Last updated 3 mins ago',
    step: 5,
    status: 0,
    route: '/my-team',
  },
];
