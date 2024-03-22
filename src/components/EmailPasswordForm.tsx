import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IAuthFormProps } from '../models/auth';
import logo from '../assests/images/Email-Logo.png';

const validateEmail = (email: string): boolean => {
  // Regular expression for email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password: string): boolean => {
  // Regular expression for password validation
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  return regex.test(password);
};

const EmailPasswordForm: React.FC<IAuthFormProps> = ({ submitFormValueHandler, isLogin, isForgotPassword, isResetPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetPassword, setResetPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(true);

  const emailIsValid = validateEmail(email);
  const passwordIsValid = validatePassword(password);
  const resetPasswordIsValid = validatePassword(resetPassword) && password === resetPassword;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleResetPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResetPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isResetPassword && !isForgotPassword) {
      if (!emailIsValid || !passwordIsValid) {
        setFormIsValid(false);
        return;
      }
    }
    if (isResetPassword) {
      if (!resetPasswordIsValid || !passwordIsValid) {
        setFormIsValid(false);
        return;
      }
    }
    if (isForgotPassword && !emailIsValid) {
      setFormIsValid(false);
      return;
    }

    setFormIsValid(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    submitFormValueHandler(data);
  };

  return (
    <>
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'></div>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img className='mx-auto h-10 w-auto' src={logo} alt='Your Company' />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          {isLogin && !isResetPassword && !isForgotPassword && 'Sign in to your account'}
          {!isLogin && !isResetPassword && !isForgotPassword && 'Create an account'}
          {isResetPassword && 'Reset your password'}
          {isForgotPassword && 'Forgot your password'}
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' onSubmit={handleSubmit}>
          {!isResetPassword && (
            <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                Email
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4'
                />
                {!formIsValid && !emailIsValid && <p className='text-red-500 text-sm mt-1'>Please enter a valid email address.</p>}
              </div>
            </div>
          )}

          {!isForgotPassword && (
            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
                {isLogin && (
                  <div className='text-sm'>
                    <Link to='/forgot-password' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                      Forgot password?
                    </Link>
                  </div>
                )}
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4'
                />
                {!formIsValid && !passwordIsValid && <p className='text-red-500 text-sm mt-1'>Please enter a valid password.</p>}
              </div>
            </div>
          )}
          {isResetPassword && (
            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='resetPassword' className='block text-sm font-medium leading-6 text-gray-900'>
                  Reset Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='resetPassword'
                  name='resetPassword'
                  type='password'
                  autoComplete='reset-password'
                  required
                  value={resetPassword}
                  onChange={handleResetPasswordChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4'
                />
                {!formIsValid && !resetPasswordIsValid && <p className='text-red-500 text-sm mt-1'>Please enter a valid reset password.</p>}
              </div>
            </div>
          )}

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              {isLogin && 'Sign in'}
              {!isLogin && 'Create account'}
            </button>
          </div>
        </form>

        {isLogin && !isResetPassword && !isForgotPassword && (
          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?
            <Link to='/signup' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
              Signup
            </Link>
          </p>
        )}
        {!isLogin && !isResetPassword && !isForgotPassword && (
          <p className='mt-10 text-center text-sm text-gray-500'>
            Already a member?
            <Link to='/login' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
              Sign in
            </Link>
          </p>
        )}
      </div>
    </>
  );
};

export default EmailPasswordForm;
