import React from 'react';
import { ICardProps } from '../../models/cards';
import classes from './Cards.module.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardStatus } from '../../models/cards';

const STATUSCOLORS: { backgroundColor: string; status: number }[] = [
  {
    backgroundColor: 'bg-[#03a61c]',
    status: 2,
  },
  {
    backgroundColor: 'bg-[#d92525]',
    status: 0,
  },
  {
    backgroundColor: 'bg-[#f29f05]',
    status: 1,
  },
];

const currentCardColorHandler = (status: number): string => {
  const currentStatus = STATUSCOLORS.find((item) => item.status === status);

  return currentStatus?.backgroundColor ? currentStatus.backgroundColor : '';
};

const DashboardCard: React.FC<ICardProps> = ({ title, step, status, lastUpdated }) => {
  return (
    <Card className={`max-w-md mx-auto ${classes.customCard}`}>
      <CardContent className={classes.customCardContent}>
        <div className='py-3 px-5'>
          <Typography color='textSecondary' component='h6' variant='body1' className='text-left'>
            Step: {step}
          </Typography>
          <Typography variant='h6' component='h2' className='py-4 text-center'>
            {title}
          </Typography>
          <Typography color='textSecondary' variant='caption' component='p' className='text-right'>
            {lastUpdated}
          </Typography>
        </div>
        <div className={`${classes.bottomContainer} ${currentCardColorHandler(status)} text-white`}>
          <Typography variant='h2' className={classes.bottomFont}>
            {CardStatus[status]}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
