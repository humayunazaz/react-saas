import React from 'react';
import EmailPasswordForm from '../components/EmailPasswordForm';
import { ILoginSignupForm } from '../models/auth';

const ResetPasswordPage = () => {
  const onSubmit = (formData: ILoginSignupForm): void => {
    console.log(formData);
  };
  return (
    <>
      <EmailPasswordForm submitFormValueHandler={onSubmit} isLogin={false} isForgotPassword={false} isResetPassword={true} />
    </>
  );
};

export default ResetPasswordPage;
