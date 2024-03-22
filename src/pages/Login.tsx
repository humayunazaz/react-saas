import React from 'react';
import EmailPasswordForm from '../components/EmailPasswordForm';
import { ILoginSignupForm } from '../models/auth';
import { setAuthToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
const loginTokenHandler = (): void => {
  const array = new Uint32Array(8);
  window.crypto.getRandomValues(array);

  let token = '';
  for (let i = 0; i < array.length; i++) {
    token += array[i].toString(16);
  }
  setAuthToken(token);
};
const LoginPage = () => {
  const navigate = useNavigate();
  const onSubmit = (formData: ILoginSignupForm): void => {
    console.log(formData);
    loginTokenHandler();
    navigate('/');
  };

  return (
    <>
      <EmailPasswordForm submitFormValueHandler={onSubmit} isLogin={true} isForgotPassword={false} isResetPassword={false} />
    </>
  );
};

export default LoginPage;
