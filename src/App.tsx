import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ForgotPassword from './pages/Forgot-Password';
import ResetPassword from './pages/Reset-Password';
import CompanyProfilePage from './pages/Company-Profile';
import CompanyInformationPage from './pages/Company-Information';
import QuestionnairePage from './pages/Questionnaire';
import DocumentsPage from './pages/Documents';
import MyTeamPage from './pages/My-Team';
import MessagesPage from './pages/Messages';
import RootPage from './pages/Root';
import { tokenLoader, alreadyLoggedInLoader } from './utils/auth';
import SignupPage from './pages/Signup';
import NotFoundPage from './pages/NotFound';

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      loader: tokenLoader,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'company-profile', element: <CompanyProfilePage /> },
        { path: 'company-information', element: <CompanyInformationPage /> },
        { path: 'questionnaire', element: <QuestionnairePage /> },
        { path: 'Documents', element: <DocumentsPage /> },
        { path: 'my-team', element: <MyTeamPage /> },
        { path: 'messages', element: <MessagesPage /> },
      ],
    },
    { path: 'login', element: <Login />, loader: alreadyLoggedInLoader },
    { path: 'forgot-password', element: <ForgotPassword /> },
    { path: 'reset-password', element: <ResetPassword /> },
    { path: 'signup', element: <SignupPage /> },
  ]);
  return (
    <main>
      <RouterProvider router={BrowserRouter} />
    </main>
  );
}

export default App;
