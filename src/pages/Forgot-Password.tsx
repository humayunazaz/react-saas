import React from 'react';
import EmailPasswordForm from '../components/EmailPasswordForm';
import { ILoginSignupForm } from '../models/auth';

const ForgotPasswordPage = () => {
  const onSubmit = (formData: ILoginSignupForm): void => {
    console.log(formData);
  };
  return (
    <>
      <EmailPasswordForm submitFormValueHandler={onSubmit} isLogin={false} isForgotPassword={true} isResetPassword={false} />
    </>
  );
};

export default ForgotPasswordPage;
