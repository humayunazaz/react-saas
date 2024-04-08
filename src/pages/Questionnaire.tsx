import React from 'react';
import QuestionnaireStepper from '../components/questionnaire/questionnaire-stepper';

const QuestionnairePage = () => {
  return (
    <div className='p-5'>
      <div className='questionnaireStepperContainer'>
        <QuestionnaireStepper />
      </div>
    </div>
  );
};

export default QuestionnairePage;
