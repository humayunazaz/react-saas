import { LoaderFunction, redirect } from 'react-router-dom';

const setAuthToken = (token: string): void => {
  localStorage.setItem('token', token);
};

const removeAuthToken = (): void => {
  localStorage.removeItem('token');
};

const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

const tokenLoader: LoaderFunction<string | undefined> = async () => {
  const token = getAuthToken();
  if (!token) {
    return redirect('/login');
  }
  return token;
};

export { setAuthToken, removeAuthToken, getAuthToken, tokenLoader };
