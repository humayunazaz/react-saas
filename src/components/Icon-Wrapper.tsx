import React from 'react';
import { IconContext, IconType } from 'react-icons';
import { RxDashboard } from 'react-icons/rx';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { GiTeamIdea } from 'react-icons/gi';
import { IoDocument } from 'react-icons/io5';
import { TiMessages } from 'react-icons/ti';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

const IconWrapper: React.FC<{ iconName: string }> = ({ iconName }) => {
  let IconComponent: IconType | null = null;

  switch (iconName) {
    case 'dashboard':
      IconComponent = RxDashboard;
      break;
    case 'document':
      IconComponent = IoDocument;
      break;
    case 'questionnaire':
      IconComponent = BsFillQuestionCircleFill;
      break;
    case 'team':
      IconComponent = GiTeamIdea;
      break;
    case 'messages':
      IconComponent = TiMessages;
      break;
    case 'menu':
      IconComponent = IoMenu;
      break;
    case 'close':
      IconComponent = IoMdClose;
      break;
    default:
      // If the provided icon name is not recognized, you can render a placeholder or return null
      return null;
  }

  return (
    <IconContext.Provider value={{ size: '1.5em' }}>
      <IconComponent />
    </IconContext.Provider>
  );
};

export default IconWrapper;
